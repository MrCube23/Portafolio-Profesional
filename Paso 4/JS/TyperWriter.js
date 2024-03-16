const texts = ["Emyel Vado", "Front-end"];
let count = 0;
let index = 0; 
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  
  document.getElementById("text").textContent = letter;
  
  if (letter.length === currentText.length) {
    setTimeout(function() {
      erase();
    }, 2000);
    return;
  }
  
  setTimeout(type, 100);
}

function erase() {
  if (index === 0) {
    count++;
    setTimeout(type, 1000);
    return;
  }
  
  letter = currentText.slice(0, --index);
  document.getElementById("text").textContent = letter;
  
  setTimeout(erase, 50);
}

type();