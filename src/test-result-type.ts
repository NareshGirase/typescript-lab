//Restrict the allowed values using TypeScript.

type testResult = "Passed"|"Failed"|"Skipped"

function actualTestResult(result:testResult){
    console.log(`Test result ${result}`)
}

actualTestResult("Passed");
actualTestResult("Failed");
actualTestResult("Skipped");