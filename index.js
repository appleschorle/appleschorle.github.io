const target = document.getElementById("typewriter");

const texts = ["Hello!", "Labas!", "Hallo!", "Hej!", "안녕하세요!"];
let i = 0;
let j = 0;
const speed = 140;
const pause = 2000;

function type() {
  const fullText = texts[j];
  if (!document.body.contains(target)) return; // stop if element gone
  target.textContent = fullText.substring(0, i);
  if (i < fullText.length) {
    i++;
    setTimeout(type, speed);
  } else {
    setTimeout(deleteText, pause);
  }
}

function deleteText() {
  const fullText = texts[j];
  if (!document.body.contains(target)) return; // stop if element gone
  target.textContent = fullText.substring(0, i);
  if (i > 0) {
    i--;
    setTimeout(deleteText, speed / 2);
  } else {
    j = (j + 1) % texts.length;
    setTimeout(type, speed);
  }
}

type();
