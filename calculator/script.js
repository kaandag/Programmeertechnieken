function calculate() {
    var string = document.getElementById('numbers').value;
    var res = string.split(",");
    var operator = document.getElementById('operation').value;
    parseInt(res);


    var output = 0;
    var outputx = 1;
    var outputD = res[0];

    if (operator == "sum") {
        for (i = 0; i < res.length; i++) {
            output+=parseFloat(res[i]);
        }
        document.getElementById("result").innerHTML = output;

    } else if (operator == "multiply") {
        for (i = 0; i < res.length; i++) {
            outputx*=parseFloat(res[i]);
            document.getElementById("result").innerHTML = outputx;
        }
    }
  }
