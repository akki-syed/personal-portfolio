// Typing Text Animation
const typingElement = document.getElementById('typing-text');
const textArray = ["Akhil Syed", "a Web Developer", "an AI Enthusiast"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (index >= textArray.length) {
    index = 0;
  }
  currentText = textArray[index];
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, isDeleting ? 100 : 150);
}
type();

// Fade In Sections on Scroll
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  
  faders.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
});