
//СЛАЙДЕР
//-ИЗОБРАЖЕНИЯ
const sliderImage = document.querySelector('.slider__image');
const slides = sliderImage.querySelectorAll('img');
//-ТЕКСТ
const sliderBody = document.querySelector('.slider__body');
const slidesText = sliderBody.querySelectorAll('.slider__text');
//-ТОЧКИ
const dots = document.querySelectorAll('.slider__dots');
const numberOfSlides = slides.length;
const numberOfSlidesText = slidesText.length;
var i = 0;

function nextSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  })
  slidesText.forEach((slideText) => {
    slideText.classList.remove('active');
  })
  dots.forEach((dot) => {
    dot.classList.remove('active');
  })
  i++;
  if (i > (numberOfSlides - 1)) {
    i = 0;
  }
  slides[i].classList.add('active');
  slidesText[i].classList.add('active');
  dots[i].classList.add('active');
}
function prevSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  })
  slidesText.forEach((slideText) => {
    slideText.classList.remove('active');
  })
  dots.forEach((dot) => {
    dot.classList.remove('active');
  })
  i--;
  if (i < 0) {
    i = numberOfSlides - 1;
  }
  slides[i].classList.add('active');
  slidesText[i].classList.add('active');
  dots[i].classList.add('active');
}
var sliderNav = function (manual) {
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
  dots[manual].classList.add('active');
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slidesText.forEach((slideText) => {
    slideText.classList.remove('active');
  });
  slides[manual].classList.add('active');
  slidesText[manual].classList.add('active');
}
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    sliderNav(i);
  });
});
//-АВТОПЕРЕКЛЮЧЕНИЕ
var repeater = () => {
  playSlider = setInterval(nextSlide, 10000);
};
repeater();
//-ОСТАНОВКА ПРИ НАВЕДЕНИИ МЫШЬЮ НА СЛАЙДЕР
sliderBody.addEventListener('mouseover', ()=>{
  clearInterval(playSlider);
});
//-ЗАПУСК, КОГДА УБРАЛИ МЫШЬ ИЗ СЛАЙДЕРА
sliderBody.addEventListener('mouseout',()=>{
  repeater();
})
