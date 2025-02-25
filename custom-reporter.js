import WDIOReporter from "@wdio/reporter";
import { JSDOM } from "jsdom";
import xmlFormat from 'xml-formatter';
import components from "./components.js";
import fs, { cp } from "fs";
import path from "path";
import { v4 as uuidv4 } from 'uuid';
import LZString from "lz-string";
const __dirname = path.resolve();
let allExcludedCommands = [];
let activeReports = {};
export default class CustomReporter extends WDIOReporter {
  constructor(options) {
    /*
     * make reporter to write to the output stream by default
     */
    options = Object.assign(options, { stdout: true });
    super(options);
    // allExcludedCommands = allExcludedCommands.concat(options.excludedCommands) 
    this.isFindElementActive = false;
    this.findElementActiveList = {};
    this.testCounter = 1; // Counter to track test cases
    this.testDOMs = new Map(); // Map to store DOMs for each test
    this.currentFieldName = "";
    this.currentTestFolderPath = "";
    if(options.outputFolder && options.outputFolder != undefined){
      this.currentTestFolderPath = "\\"+options.outputFolder+"\\"
    }else{
      this.currentTestFolderPath = path.join(__dirname,"\\");
    }
    this.stepNumber = 1;
    global.commandArgsMap = new Map(); // Store arguments globally per command
    this.registerEvents(this);
  }

  onRunnerStart(totalSpecs, specs, browserConfigs) {}

  // Method to hook into beforeCommand and afterCommand
  
  onSuiteStart(suite) {
    
  }

  onHookStart(hook) {}

  onHookEnd(hook) {}

  onTestStart(test) {
    this.currentTestFolderPath = this.currentTestFolderPath+`${test.title.replace(/[^a-z0-9]/gi,"_")}`;
    global.currentTestScreenshotPath = this.currentTestFolderPath + "\\screenshots\\"
    try{
      console.log("this.currentTestFolderPath",this.currentTestFolderPath)
      if(!fs.existsSync(this.currentTestFolderPath)){
        fs.mkdirSync(this.currentTestFolderPath);
      }
    }catch(e){
      console.log("Exception in creating dir: "+this.currentTestFolderPath,e)
    }
    
      if(!fs.existsSync(this.currentTestFolderPath)){
        fs.mkdirSync(this.currentTestFolderPath);
      }
      if(!fs.existsSync(this.currentTestFolderPath+"\\screenshots\\")){
        fs.mkdirSync(this.currentTestFolderPath+"\\screenshots\\");
      }
    const dom = new JSDOM(components.HTML);
    let uid = uuidv4();
    console.log("reporter-uuid:",uid)
    process.emit('assignUUID', uid); // Send UUID to WDIO Config
    global.uid = uid;
    console.log("HTMLL:",components.HTML)
    this.testDOMs.set(global.uid, dom); //dom.window.document
    // Update the current test title
    this.currentTestTitle = test.title;
    this.testCounter++;
    let dom2 =  this.testDOMs.get(global.uid);
      let document =  dom2.window.document;
      console.log("dom2",( document.querySelector("body")).textContent)
  }

  onTestPass(test) {
    this.write(`Congratulations! Your test "${test.title}" passed 👏`);
  }

  onTestFail(test, error) {
    this.write(`Oops! Your test "${test.title}" failed 👏`);
  }

  onTestSkip(test) {}

  async onTestEnd(test) {
    try{
      console.log(':::',test)
      console.log(':::',Object.keys(test))
    const dom = this.testDOMs.get(global.uid);
    await this.updateReportStats([{
      name: "Test Status",
      value: test.state.toUpperCase(),
      material_symbol: "verified"
    },{
      name: "Run Time",
      value: parseFloat(test._duration/1000).toFixed(2)+"Secs",
      material_symbol: "avg_time"
    },
    {
      name: "Environment",
      value: "TEST",
      material_symbol: "south_america"
    },
    ]);
    if (dom) {
      // Serialize the DOM to an HTML string
      const htmlString = dom.serialize();
      // Write the HTML string to a file
      const fileName = `test-output-${test.title.replace(
        /[^a-z0-9]/gi,
        "_"
      )}.html`;
      const filePath = this.currentTestFolderPath+"\\detailed-report.html";
      fs.writeFileSync(this.currentTestFolderPath+"\\detailed-report.html", htmlString);
      console.log(`Test output written to: ${filePath}`);
      // Clean up: Remove the DOM from the Map
      this.testDOMs.delete(global.uid);
    }
  }catch(e){
    console.log("Exception in onTestEnd",e)
  }
  }

  onSuiteEnd(suite) {}

  onRunnerEnd(runner) {}

  trackFindElement(body) {}

  registerEvents(){
    process.on('add-test-step',async ({status,command,fieldName,additionalInfo})=>{
      return new Promise(async (resolve,reject)=>{
      console.log(this.testDOMs.size);
      console.log("add-test-step global.uid",global.uid)
      console.log("add-test-step status, stepNumber,command,fieldName,additionalInfo",status, stepNumber,command,fieldName,additionalInfo)
      let constructedStep = await components.testStep(status,this.stepNumber++, command, fieldName,additionalInfo )
      console.log("constructedStep",constructedStep)
      let dom = await this.testDOMs.get(global.uid);
      let document = await dom.window.document;
      (await document.querySelector(".test-steps")).innerHTML += constructedStep
      console.log("body",(await document.querySelector(".test-steps")).innerHTML)
      resolve();
      })
    });
    process.on('add-test-step-api',async ({status,serviceName,metaDataMetrics,additionalInfo, endpoint, requestHeaders, requestBody,responseHeaders, responseBody})=>{
      return new Promise(async (resolve,reject)=>{
        try{
          console.log(this.testDOMs.size);
          console.log("add-test-step-api global.uid",global.uid)
          let constructedStep = await components.testStepApi(status,this.stepNumber++,serviceName,metaDataMetrics,additionalInfo, endpoint, requestHeaders, requestBody,responseHeaders, responseBody )
          console.log("add-test-step-api constructedStep",constructedStep)
          let dom = await this.testDOMs.get(global.uid);
          let document = await dom.window.document;
          (await document.querySelector(".test-steps")).innerHTML += constructedStep
          console.log("body",(await document.querySelector(".test-steps")).innerHTML)
          resolve();
        }catch(e){
          console.log("Exception in add-test-step-api",e)
          reject(e)
        }
      })
    });
    process.on('add-test-step-payload',async ({status,serviceName,metaDataMetrics = [],additionalInfo, info, payload})=>{
      return new Promise(async (resolve,reject)=>{
        try{
          console.log(this.testDOMs.size);
          console.log("add-test-step-payload global.uid",global.uid)
          let constructedStep = await components.testStepPayload(status,this.stepNumber++,serviceName,metaDataMetrics = [],additionalInfo, info, payload)
          console.log("add-test-step-payload constructedStep",constructedStep)
          let dom = await this.testDOMs.get(global.uid);
          let document = await dom.window.document;
          (await document.querySelector(".test-steps")).innerHTML += constructedStep
          Array.from(await document.querySelectorAll(".test-step:last-child .payload")).forEach(async element=>{
            let payload = element.innerHTML
            if(payload.includes("<")||payload.includes("<xml")||payload.includes("<?xml")){
              payload = xmlFormat(payload);
            }
            element.textContent = payload;
          })
          resolve();
        }catch(e){
          console.log("Exception in add-test-step-payload",e)
          reject(e)
        }
      })
    });
    process.on('add-test-step-image',async ({stepNumber, screenshotName})=>{
      return new Promise(async (resolve,reject)=>{
        try{
          //console.log("currentTestFolderPathLL",this.currentTestFolderPath)
          let screenshotPath = "./screenshots/"+screenshotName.replace(/[^a-z0-9]/gi,"_")+(screenshotName.includes('.png')?"":".png");
          console.log("screenshotPath",screenshotPath)
          
          console.log("add-test-step-image global.uid",global.uid)
          let constructedStep = await components.testStepImage(stepNumber, screenshotName, screenshotPath)
          // console.log("add-test-step-image constructedStep",constructedStep)
          let dom = await this.testDOMs.get(global.uid);
          let document = await dom.window.document;
          (await document.querySelector(".test-steps")).innerHTML += constructedStep
          resolve();
        }catch(e){
          console.log("Exception in add-test-step-image",e)
          reject(e)
        }
      })
    });
  }

  async updateReportStats(testStatsArray){
    let dom = await this.testDOMs.get(global.uid);
    let document = await dom.window.document;
    awaittestStatsArray.forEach(stat=>{

    })
    (await document.querySelector('#stats-left')).innerHTML += components.statBox("Test Status",test.state.toUpperCase(),"verified");
    (await document.querySelector('#stats-left')).innerHTML += components.statBox("Run Time",parseFloat(test._duration/1000).toFixed(2)+"Secs","avg_time");
    return;
  }
  
}
