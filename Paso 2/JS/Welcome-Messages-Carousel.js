const carouselText = document.getElementById('carousel-text');
const textArray = [
"Bienvenido a mi portafolio, donde cada proyecto cuenta una historia única!",
"Apasionado por los desafíos, siempre listo para superarlos y crecer en el proceso!",
"La creatividad es el lienzo en blanco donde pinto mi mundo!"
];
let currentSlide = 0;

function nextSlide() {
 carouselText.classList.add('hidden');

 setTimeout(function() {
 currentSlide = (currentSlide + 1) % textArray.length;
 const newText = textArray[currentSlide];
 carouselText.innerHTML = `<span class="">${newText.charAt(0)}</span>${newText.slice(1)}`;
 carouselText.classList.remove('hidden');
 }, 500);
}
 setInterval(nextSlide, 5000);