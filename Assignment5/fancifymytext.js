/*
function biggerButtonClickHandler() {
    alert("Hello, world!");
  }
  
  window.onload = function() {
    var biggerButton = document.getElementById("bigger-button");
    biggerButton.addEventListener("click", biggerButtonClickHandler);
  } 
   
*/

  function makeTextBigger() {
    document.getElementById("input-text").style.fontSize = "24pt";
  }
  
  function applyStyle() {
    var isChecked = document.getElementById("fancy").checked;
    var textArea = document.getElementById("input-text");
    if (isChecked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
  }
  
  
  function capitalizeText() {
    var textarea = document.getElementById("input-text");
    var text = textarea.value.toUpperCase();
    var sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        console.log(words);
        var lastWord = words[words.length - 1];
        lastWord += "-Moo";
        words[words.length - 1] = lastWord;
        sentences[i] = words.join("_");
    }
    textarea.value = sentences.join(". ");
}