function calculate() {
    var string = document.getElementById('numbers').value;
    var res = string.split(",");
    var operator = document.getElementById('operation').value;


    var output = parseFloat(res[0]);

    if (operator == "sum") {
        for (i = 1; i < res.length; i++) {
            output+=parseFloat(res[i]);
        }

    } else if (operator == "substract") {
        for (i = 1; i < res.length; i++) {
            output-=parseFloat(res[i]);
        }
    } else if (operator == "multiply") {
        for (i = 1; i < res.length; i++) {
            output*=parseFloat(res[i]);
        }
    } else if (operator == "divide") {
        for (i = 1; i < res.length; i++) {
            output /=parseFloat(res[i]);
        }
    }
    document.getElementById("result").innerHTML = output;
  }
