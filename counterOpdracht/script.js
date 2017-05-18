var number = 0;

function count(){
    if (number == 100) {
        document.body.style.backgroundColor = "black";
        clearInterval(int);
    }else{
        document.getElementById('item').innerHTML = ++number;
    }
}

var int = setInterval(count, 70);
