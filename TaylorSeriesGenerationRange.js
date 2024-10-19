function taylorSeriesGenerationAtA(){
    var expansion = [];
    for (let i=0;i<10;i++) {
        var allElements = derivative(i)/factorize(i);
        expansion.push(allElements.toFixed(8));
    }
    var expression = [];
    var powerTerms = [];
    var rangeValue = document.getElementById("myRange").value;
    for (let m=0; m<expansion.length; m++) {
        powerTerms.push(m)
        if (expansion[m]!=0){
            if (rangeValue<0) {
                var absRangeValue = Math.abs(rangeValue)
                if (expansion[m] === 1){
                    expression.push(expansion[m]+'(x + ' + absRangeValue + ')');
                }
                else {
                    expression.push(expansion[m]+'(x + ' + absRangeValue + ')^'+powerTerms[m])
                }
            } else {
                if (expansion[m] === 1){
                    expression.push(expansion[m]+'(x - ' + rangeValue + ')');
                }
                else {
                    expression.push(expansion[m]+'(x - ' + rangeValue + ')^'+powerTerms[m])
                }
            }    
        } 
    }
    var expLength = expression.length;
    var sum = 0;    // var sum = "" for not getting zero term
    for (k=0; k<expLength; k++){
            sum = sum + ')+(' + expression[k];
    }  
    var bracketedSum = "(" + sum + ")"
    document.getElementById("expansionSeries").innerHTML = bracketedSum;

    //***************************** Plot the graph *******************************//

    // define equations
    let exp1 = document.getElementById("fname").value.toString();
    let inputExp1 = "Math." + exp1;
    var a = rangeValue;
    var starExpression = [];
    for (let m=0; m<expansion.length; m++) {
        if (expansion[m]!=0){
            if (expansion[m] === 1){
                starExpression.push(expansion[m] + `*(x - ${a})`);
            }
            else {
                starExpression.push(expansion[m]+`*(x - ${a})` +'**'+powerTerms[m])
            }
        } 
    }

    var equations = [];
    let exp = "";
    for (let l=0;l<starExpression.length;l++) {
        exp = exp + "+(" + starExpression[l] + ")";
        equations.push(exp);
    }
    var eqLength = equations.length;
    
    for (let u=0; u<eqLength;u++) {
        var eq = equations[u].toString();
        // Generate values
        const xValues = [];
        const yValues = [];
        const xEqValues = [];
        const yEqValues = [];

        var trace1 = {
            x: xValues,
            y: yValues,
            mode: "lines",
            name: exp1
        };
        var trace2 = {
            x: xEqValues,
            y: yEqValues,
            mode: "lines",
            name: "TaylorSeries"
        }
        

        for (let x = -Math.PI; x <= Math.PI; x += 0.005) {
            xValues.push(x);
            yValues.push(eval(inputExp1));
            xEqValues.push(x);
            yEqValues.push(eval(eq));
        }

        // Define Data
        const data = [trace1, trace2];

        //Define Layout
        const layout = {title: "Graph of taylor series for " + exp1};

        // Display using Plotly
        Plotly.newPlot("myPlot", data, layout);
    }
}

function factorize(num) {
    if (num<0) {
        return -1
    } else if (num==0) {
        return 1
    } else {
        return num*factorize(num-1)
    }
}

function derivative(a) {
    var inputFunction = document.getElementById("fname").value;
    if (a==0) {
        var scope1 = {x:0};
        var derivativeValueAtX_01 = math.evaluate(inputFunction,scope1);
        return derivativeValueAtX_01;
    } else {
        var derivativeValue1 = math.derivative(inputFunction,'x');
        var y1 = 0;
        for (let j=0; j<a; j++) {
            y1 = derivativeValue1;
            y2 = math.derivative(y1,'x');
            derivativeValue1 = y2;
        } 
        var scope2 = {x:0};
        var evaluatedValue = math.evaluate(y1.toString(),scope2)
        return evaluatedValue; 
    }
} 
