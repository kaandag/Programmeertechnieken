function countWords() {
    var text = document.getElementById('textarea').value;
    var letter = text.split("");
    var word = text.split(" ");

    var lgth = 0;
    var longest;

    for(var i=0; i < word.length; i++){
        if(word[i].length > lgth){
            var lgth = word[i].length;
            longest = word[i];
        }
    }

    document.getElementById('resultK').innerHTML = "aantal karakters:" +  letter.length;
    document.getElementById('resultW').innerHTML = "aantal woorden:" + word.length;
    document.getElementById('resultL').innerHTML = "langste woord:" + longest;
}

function FirstLetterUpper(string) {
    var text = document.getElementById('textarea').value;
    var word = text.split(" ");

    for (var i = 0; i < word.length; i++) {
        word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
}

document.getElementById("button").addEventListener("click", FirstLetterUpper);
