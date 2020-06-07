'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  get slides() {
    return this.slides;
  }

  carouselSlideIndex = 0;

  constructor(element) {
    this.el = element;
    this.renderCarousel();
    this.el.addEventListener('click', (event) => this.onClicked(event));
    this.createCarouselSlide(this.carouselSlideIndex);
  }
  renderCarousel() {
    this.el.innerHTML = `
    <div id="mainCarousel" class="main-carousel carousel slide">
    <ol class="carousel-indicators">
        <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
    </ol>
    <div class="carousel-inner"></div>
    <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>
    </div>
    `;
  }
  onClicked(event) {
    let target = event.target;
    if (target.closest('button')) {
      let dataValue = target.closest('button').dataset.slide;
      if (dataValue === 'next') {
        if (this.carouselSlideIndex !== 2) {
          this.carouselSlideIndex += 1;
          this.createCarouselSlide(this.carouselSlideIndex);
          this.setActiveCarouselIndicatorClass(this.carouselSlideIndex); 
        }
        else {
          this.carouselSlideIndex = 0;
          this.createCarouselSlide(this.carouselSlideIndex);
          this.setActiveCarouselIndicatorClass(this.carouselSlideIndex);
        }
      }
      else {
        if (this.carouselSlideIndex !== 0) {
          this.carouselSlideIndex -= 1;
          this.createCarouselSlide(this.carouselSlideIndex);
          this.setActiveCarouselIndicatorClass(this.carouselSlideIndex);
        }
        else {
          this.carouselSlideIndex = 2;
          this.createCarouselSlide(this.carouselSlideIndex);
          this.setActiveCarouselIndicatorClass(this.carouselSlideIndex);
        }
      }
    }
  }
  setActiveCarouselIndicatorClass(index) {
    for (let item of this.el.querySelectorAll('.carousel-indicator')) {
      item.classList.remove('active');
    }
    this.el.querySelectorAll('.carousel-indicator')[index].classList.add('active');
  }
  createCarouselSlide(index) {
    let carouselSlideLayout = `
    <div class="carousel-item active">
    <img src="${this.slides[index].img}" alt="Activelide">
      <div class="container">
        <div class="carousel-caption">
            <h3 class="h1">${this.slides[index].title}</h3>
            <div>
                <a class="btn" href="#" role="button">
                    View all DEALS
                    <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                </a>
            </div>
        </div>
      </div>
    </div>
    `;
    this.setActiveCarouselIndicatorClass(index);
    this.el.querySelector('.carousel-inner').innerHTML = carouselSlideLayout;
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
