const WDIOReporter = require("@wdio/reporter").default;
const JSDOM = require("jsdom").JSDOM;
const xmlFormat = require('xml-formatter');
let components = require("./components.cjs");
const fs = require("fs")
const path = require("path")
const uuidv4 = require("uuid").v4;
class CustomReporter extends WDIOReporter {
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
    this.theme = options.theme;
    if(options.outputFolder && options.outputFolder != undefined){
      this.currentTestFolderPath = options.outputFolder
    }else{
      this.currentTestFolderPath = path.join(require.main ? path.dirname(require.main.filename) : process.cwd(),"\\");
    }
    this.stepNumber = 1;
    global.commandArgsMap = new Map(); // Store arguments globally per command
    if(this.theme && this.theme != undefined){
      components = require(`./components/${this.theme.toLowerCase()}/components.cjs`)
      console.log("Using Theme:"+this.theme);
    }
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
    console.log("this.currentTestFolderPath",this.currentTestFolderPath)
    try{
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
    console.log("custom-cureporter-uuid:",uid)
    process.emit('assignUUID', uid); // Send UUID to WDIO Config
    global.uid = uid;
    this.testDOMs.set(global.uid, dom); //dom.window.document
    // Update the current test title
    this.currentTestTitle = test.title;
    this.testCounter++;
    
  }

  onTestPass(test) {
    this.write(`Congratulations! Your test "${test.title}" passed 👏`);
  }

  onTestFail(test, error) {
    this.write(`Oops! Your test "${test.title}" failed ❌`);
  }

  onTestSkip(test) {}

  async onTestEnd(test) {
    let runTime  = ((test._duration)/1000)<60?`${parseFloat(test._duration/1000).toFixed(2)} Secs`:`${parseFloat((test._duration/1000)/60).toFixed(2)}`;
    if((test._duration)/1000>60){
      runTime = runTime.split('.');
      runTime = `${runTime[0]}m ${runTime[1]}s`
    }
    
    try{
    const dom = this.testDOMs.get(global.uid);
    await this.updateReportStats([{
      name: "Test Status",
      value: test.state.toUpperCase(),
      material_symbol: "verified"
    },{
      name: "Run Time",
      value: runTime,
      material_symbol: "avg_time",
      additional_color_class: "blue"
    },
    {
      name: "Environment",
      value: "TEST",
      material_symbol: "south_america"
    },
    {
      name: "Steps Failed",
      value: "0",
      material_symbol: "cancel",
      additional_color_class: "danger"
    }
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
    try{
      
      // console.log("add-test-step global.uid",global.uid)
      let constructedStep = await components.testStep(status,this.stepNumber++, command, fieldName,additionalInfo )
      
      let dom = await this.testDOMs.get(global.uid);
      let document = await dom.window.document;
      (await document.querySelector(".test-steps")).innerHTML += constructedStep
      resolve();
    }catch(e){
      console.log("exception in Custom Reporter:add-test-step",e)
    }
      })
    });
    process.on('add-test-step-api',async ({status,serviceName,metaDataMetrics,additionalInfo, endpoint, requestHeaders, requestBody,responseHeaders, responseBody})=>{
      return new Promise(async (resolve,reject)=>{
        try{
          
          let constructedStep = await components.testStepApi(status,this.stepNumber++,serviceName,metaDataMetrics,additionalInfo, endpoint, requestHeaders, requestBody,responseHeaders, responseBody )
          let dom = await this.testDOMs.get(global.uid);
          let document = await dom.window.document;
          (await document.querySelector(".test-steps")).innerHTML += constructedStep
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
          
          let constructedStep = await components.testStepPayload(status,this.stepNumber++,serviceName,metaDataMetrics = [],additionalInfo, info, payload)
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
    process.on('add-test-step-image',async ({ screenshotName})=>{
      return new Promise(async (resolve,reject)=>{
        try{
          //console.log("currentTestFolderPathLL",this.currentTestFolderPath)
          let screenshotPath = "./screenshots/"+screenshotName.replace(/[^a-z0-9.]/gi,"_")+(screenshotName.includes('.png')?"":".png");
          
          let constructedStep = await components.testStepImage(this.stepNumber++, screenshotName, screenshotPath)
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
    process.on('create-test-table',async ({ tableUUID, tableName, tableHeaders})=>{
      return new Promise(async (resolve,reject)=>{
        try{
          console.log('create-test-table',tableUUID, tableName, tableHeaders)
          let constructedStep = await components.testStepTable(tableUUID, tableName, tableHeaders)
          let dom = await this.testDOMs.get(global.uid);
          let document = await dom.window.document;
          (await document.querySelector(".test-steps")).innerHTML += constructedStep
          process.emit('create-test-table-done')
          resolve();
        }catch(e){
          console.log("Exception in create-test-table",e)
          reject(e)
        }
      })
    });
    process.on('create-test-table-row',async ({ tableUUID, testStatus, tableRowData})=>{
      return new Promise(async (resolve,reject)=>{
        try{
          console.log('create-test-table-row',tableUUID, testStatus, tableRowData)
          let dom = await this.testDOMs.get(global.uid);
          let document = await dom.window.document;
          let rowNumber = (await document.querySelector(`#row${tableUUID}`)).getAttribute('next-row-number');
          let constructedStep = await components.testStepTableRow(testStatus,rowNumber,tableRowData);
          (await document.querySelector(`#row${tableUUID}`)).innerHTML += constructedStep;
          (await document.querySelector(`#row${tableUUID}`)).setAttribute('next-row-number',++rowNumber);
          resolve();
        }catch(e){
          console.log("Exception in create-test-table-row",e)
          reject(e)
        }
      })
    });
  }

  async updateReportStats(testStatsArray){
    let dom = await this.testDOMs.get(global.uid);
    let document = await dom.window.document;
    await testStatsArray.forEach(async stat=>{
      (await document.querySelector('#stats-left')).innerHTML += components.statBox(stat.name,stat.value,stat.material_symbol,stat.additional_color_class);
    });
    return;
  }
  
}
module.exports = CustomReporter