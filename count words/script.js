function countWords() {
    var text = document.getElementById('textarea').value;
    var letter = text.split("");
    var word = text.split(" ");

    document.getElementById('resultL').innerHTML = "aantal karakters:" + letter.length +"<br>";
    document.getElementById('resultW').innerHTML = "aantal woorden:" + word.length;
}
