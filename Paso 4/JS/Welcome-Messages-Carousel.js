const carouselText = document.getElementById('carousel-text');
let currentSlide = 0;

async function nextSlide() {
    const textArray = welcomeMessages;
  carouselText.classList.add('hidden');

  await new Promise(resolve => setTimeout(resolve, 500));

  currentSlide = (currentSlide + 1) % textArray.length;
  const newText = textArray[currentSlide];
  carouselText.innerHTML = `<span class="">${newText.charAt(0)}</span>${newText.slice(1)}`;

  carouselText.classList.remove('hidden');
}

setInterval(nextSlide, 5000);
