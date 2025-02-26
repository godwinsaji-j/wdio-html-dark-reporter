const CustomReporter = require("math-add");

console.log("Success");
let customReporterObj = new CustomReporter({
    outputFolder:''
});
process.emit('add-test-step',{status:'pass',command:'click',fieldName:'SF Login',additionalInfo:"xpath"})
