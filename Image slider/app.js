const carouselslide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselslide.style.transform = 'translateX (' + (-size *counter) + 'px)';

//Button Listerners
nextBtn.addEventListener('click',()=>{
    carouselslide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);

});