const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const preButton = document.querySelector('.pre');
const nexButton = document.querySelector('.nex');

let currentSlide = 0;

preButton.addEventListener('click', () => {
  currentSlide--;
//   if (currentSlide < 0)
// if (currentSlide >= slides.length)  {
//     currentSlide = slides.length - 1;
// }
if(currentSlide == -1){
    
    currentSlide = slides.length-1;
}
  updateSlide();
}
);

nexButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlide();
  });
});

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    dots[index].classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
  dots[currentSlide].classList.add('active');
  const preSlide = slides[currentSlide - 1];
  const nexSlide = slides[currentSlide + 1];

  
  slides.forEach((slide) => {

    
    if (slide !== preSlide && slide !== nexSlide && slide !== slides[currentSlide] ) {
      slide.style.display = 'none';
    } else {
      slide.style.display = 'block';
    } 
    
  });
  if (preSlide) {
    preSlide.style.marginLeft = '-20px';
  }
  if (nexSlide) {
    nexSlide.style.marginLeft = '20px';
  }
}