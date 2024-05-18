export default class Slider {
    constructor(wrapperSelector, prevBtnSelector, nextBtnSelector, dotsContainerSelector) {
        this.carousel = document.querySelector(wrapperSelector);
        this.prevBtn = document.querySelector(prevBtnSelector);
        this.nextBtn = document.querySelector(nextBtnSelector);
        this.dotsContainer = document.querySelector(dotsContainerSelector);
        this.slideIndex = 0;
        this.totalSlides = this.carousel.children.length;

        this.addDots();
        this.addEventListeners();
        this.showSlides();
    }

    addEventListeners() {
        this.nextBtn.addEventListener("click", () => {
            this.slideIndex = (this.slideIndex + 1) % this.totalSlides;
            this.showSlides();
        });

        this.prevBtn.addEventListener("click", () => {
            this.slideIndex = (this.slideIndex - 1 + this.totalSlides) % this.totalSlides;
            this.showSlides();
        });

        Array.from(this.dotsContainer.children).forEach((dot, index) => {
            dot.addEventListener("click", () => {
                this.slideIndex = index;
                this.showSlides();
            });
        });
    }

    showSlides() {
        for (let i = 0; i < this.totalSlides; i++) {
            this.carousel.children[i].classList.remove('stages__li_active', 'stages__li_fade-in');
            this.carousel.children[i].classList.add('stages__li_fade-out');
        }

        this.carousel.children[this.slideIndex].classList.add('stages__li_active', 'stages__li_fade-in');
        this.carousel.children[this.slideIndex].classList.remove('stages__li_fade-out');

        Array.from(this.dotsContainer.children).forEach((dot, index) => {
            if (index === this.slideIndex) {
                dot.classList.add('stages__dot_active');
            } else {
                dot.classList.remove('stages__dot_active');
            }
        });

        this.prevBtn.disabled = this.slideIndex === 0;
        this.nextBtn.disabled = this.slideIndex === this.totalSlides - 1;
    }

    addDots() {
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('stages__dot');
            if (i === 0) {
                dot.classList.add('stages__dot_active');
            }
            this.dotsContainer.appendChild(dot);
        }
    }
}