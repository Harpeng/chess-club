import "./index.css";
import Runline from "../components/animation";
import Carousel from "../components/carousel";
import Slider from "../components/slider";

const runline = new Runline();

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  runline.addAnimation();
}

document.addEventListener("DOMContentLoaded", function () {
  new Carousel(
    ".carousel__wrapper",
    ".carousel__prev",
    ".carousel__next",
    ".carousel__current-number",
    ".carousel__overall-number"
  );
});

document.addEventListener("DOMContentLoaded", function () {
  new Slider(
    ".stages__container-mob",
    ".stages__prev",
    ".stages__next",
    ".stages__dots"
  );
});
