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
    document.getElementById('resultU').innerHTML = FirstLetterUpper();
    document.getElementById('resultF').innerHTML = FindFrequentWord();

}

function FirstLetterUpper() {
    var text = document.getElementById('textarea').value;
    var word = text.split(" ");
    var NewArray = [];

    for (var i = 0; i < word.length; i++) {
        NewArray.push(word[i].charAt(0).toUpperCase() + word[i].slice(1));
    }
    return NewArray.join(' ');
}

function FindFrequentWord(){
    var text = document.getElementById('textarea').value;
    var word = text.split(" ");
    var mostFrequent = 1;
    var m = 0;
    var string;

    for (var i = 0; i < word.length; i++) {
      for (var j = i; j < word.length; j++) {
        if (word[i] == word[j]) m++;
        if (mostFrequent < m) {
          mostFrequent = m;
          string = word[i];
        }
      }
      m = 0;
    }
    return (string +" (komt " +mostFrequent + "x voor )");
}
