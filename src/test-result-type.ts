type testResult = "Passed"|"Failed"|"Skipped"

function actualTestResult(result:testResult){
    console.log(`Test result ${result}`)
}

actualTestResult("Passed");
actualTestResult("Failed");
actualTestResult("Skipped");