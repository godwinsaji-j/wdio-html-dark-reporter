# wdio-html-reporter

#Importing in wdio.conf.js
import CustomReporter from '../custom-reporter.js'

    reporters: ['spec',[CustomReporter, {
        outputFolder: '',
        excludedCommands:excludedCommands
    }]]

#Usage
    
# Importing in wdio.conf.js

import CustomReporter from '../custom-reporter.js'

reporters: ['spec',[CustomReporter, {
outputFolder: '',
excludedCommands:excludedCommands
}]]

# Usage
## add-test-step
process.emit("add-test-step", {
status: "pass",
command: "click",
fieldName: "SF",
additionalInfo: '//h1[@title="header"]',
});
## add-test-step-api
process.emit("add-test-step-api", {
status: "pass",
serviceName: "user-list",
metaDataMetrics: [{ value: "200 OK", status: "pass" }],
additionalInfo: "",
endpoint: "https://www.google.com",
requestHeaders: JSON.stringify(
{ "content-type": "application/json" },
null,
1
),
requestBody: JSON.stringify({ name: "reporter" }, null, 1),
responseHeaders: JSON.stringify(
{ "content-type": "application/json" },
null,
1
),
responseBody: JSON.stringify({ myResp: "success" }, null, 1),
});
process.emit("add-test-step-payload", {
status: "pass",
serviceName: "Mongox",
metaDataMetrics: [{ value: "success", status: "pass" }],
additionalInfo: "",
info: "db query",
payload: JSON.stringify({ myResp: "success" }, null, 1),
});
## add-test-step-payload
process.emit("add-test-step-payload", {
status: "pass",
serviceName: "Agent",
metaDataMetrics: [{ value: "success", status: "fail" }],
additionalInfo: "",
info: "db query",
payload: "<agent><name>Arav</name></agent>",
});
process.emit("add-test-step-payload", {
status: "pass",
serviceName: "Agent",
metaDataMetrics: [{ value: "success", status: "fail" }],
additionalInfo: "",
info: "db query",
payload: "<agent><name>Immanuel</name></agent>",
});
let screenshotPath = await browser.saveScreenshot(
global.currentTestScreenshotPath + "Page_Loaded.png"
);
console.log("screenshotPath===", global.currentTestScreenshotPath);
## add-test-step-image
await process.emit("add-test-step-image", {
screenshotName: "Page Loaded",
});