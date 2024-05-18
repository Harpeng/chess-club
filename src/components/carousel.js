export default class Carousel {
    constructor(wrapperSelector, prevBtnSelector, nextBtnSelector, currentNumberSelector, overallNumberSelector) {
      this.carousel = document.querySelector(wrapperSelector);
      this.prevBtn = document.querySelector(prevBtnSelector);
      this.nextBtn = document.querySelector(nextBtnSelector);
      this.currentNumber = document.querySelector(currentNumberSelector);
      this.totalNumber = document.querySelector(overallNumberSelector);
      this.autoScrollInterval = null;
      this.slideIndex = 0;
      this.slidesToShow = this.getSlidesToShow();
  
      this.totalNumber.textContent = this.carousel.children.length;
  
      this.addEventListeners();
      this.showSlides();
      this.startAutoScroll();
    }
  
    startAutoScroll() {
      this.autoScrollInterval = setInterval(() => {
        this.slideIndex = (this.slideIndex + this.slidesToShow) % this.carousel.children.length;
        this.showSlides();
      }, 4000);
    }
  
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval);
    }
  
    addEventListeners() {
      this.nextBtn.addEventListener("click", () => {
        this.slideIndex = (this.slideIndex + this.slidesToShow) % this.carousel.children.length;
        this.showSlides();
        this.stopAutoScroll();
        this.startAutoScroll();
      });
  
      this.prevBtn.addEventListener("click", () => {
        this.slideIndex = (this.slideIndex - this.slidesToShow + this.carousel.children.length) % this.carousel.children.length;
        this.showSlides();
        this.stopAutoScroll();
        this.startAutoScroll();
      });
  
      window.addEventListener("resize", () => {
        this.slidesToShow = this.getSlidesToShow();
        this.slideIndex = 0;
        this.showSlides();
      });
    }
  
    showSlides() {
      for (let i = 0; i < this.carousel.children.length; i++) {
        this.carousel.children[i].classList.remove('carousel__item_active', 'carousel__item_fade-in');
        this.carousel.children[i].classList.add('carouse__item_fade-out');
      }
  
      for (let i = this.slideIndex; i < this.slideIndex + this.slidesToShow; i++) {
        if (i < this.carousel.children.length) {
          this.carousel.children[i].classList.add('carousel__item_active', 'carousel__item_fade-in');
          this.carousel.children[i].classList.remove('carousel__item_fade-out');
        }
      }
  
      this.currentNumber.textContent = Math.min(this.slideIndex + this.slidesToShow, this.carousel.children.length);
      this.prevBtn.disabled = this.slideIndex === 0;
      this.nextBtn.disabled = this.slideIndex + this.slidesToShow >= this.carousel.children.length;
    }
  
    getSlidesToShow() {
      if (window.innerWidth > 1200) {
        return 3;
      } else if (window.innerWidth > 780) {
        return 2;
      } else {
        return 1;
      }
    }
  }
  