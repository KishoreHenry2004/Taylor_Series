function calcSteps(stepNo) {
  var inputFunction = document.getElementById("fname").value;
  var polyStep = stepNo.toString();
  if (stepNo==0) {
      var scope1 = {x:0};
      var derivativeValueAtX_01 = math.evaluate(inputFunction,scope1);
      document.getElementById("evalStep1").innerHTML = derivativeValueAtX_01 + " = k" + polyStep.sub();
  } else if (stepNo == 1) {
    var derivativeValue1 = math.derivative(inputFunction,'x');
    var y1 = 0;
    for (let j=0; j<stepNo; j++) {
        y1 = derivativeValue1;
        y2 = math.derivative(y1,'x');
        derivativeValue1 = y2;
    } 
    var scope2 = {x:0};
    var evaluatedValue = math.evaluate(y1.toString(),scope2)
    var factorialValue = evaluatedValue/factorial(stepNo);
    document.getElementById("evalStep2").innerHTML = factorialValue + " = k" + polyStep.sub();
  } else if (stepNo == 2) {
    var derivativeValue1 = math.derivative(inputFunction,'x');
    var y1 = 0;
    for (let j=0; j<stepNo; j++) {
        y1 = derivativeValue1;
        y2 = math.derivative(y1,'x');
        derivativeValue1 = y2;
    } 
    var scope2 = {x:0};
    var evaluatedValue = math.evaluate(y1.toString(),scope2)
    var factorialValue = evaluatedValue/factorial(stepNo);
    document.getElementById("evalStep3").innerHTML = factorialValue + " = k" + polyStep.sub();
  } else if (stepNo == 3) {
    var derivativeValue1 = math.derivative(inputFunction,'x');
    var y1 = 0;
    for (let j=0; j<stepNo; j++) {
        y1 = derivativeValue1;
        y2 = math.derivative(y1,'x');
        derivativeValue1 = y2;
    } 
    var scope2 = {x:0};
    var evaluatedValue = math.evaluate(y1.toString(),scope2)
    var factorialValue = (evaluatedValue/factorial(stepNo)).toFixed(8);
    document.getElementById("evalStep4").innerHTML = factorialValue + " = k" + polyStep.sub();
  } else {
    var derivativeValue1 = math.derivative(inputFunction,'x');
    var y1 = 0;
    for (let j=0; j<stepNo; j++) {
        y1 = derivativeValue1;
        y2 = math.derivative(y1,'x');
        derivativeValue1 = y2;
    } 
    var scope2 = {x:0};
    var evaluatedValue = math.evaluate(y1.toString(),scope2)
    var factorialValue = (evaluatedValue/factorial(stepNo)).toFixed(8);
    document.getElementById("evalStep5").innerHTML = factorialValue + " = k" + polyStep.sub();
  }
}
function factorial(num) {
  if (num<0) {
      return -1
  } else if (num==0) {
      return 1
  } else {
      return num*factorize(num-1)
  }
}


