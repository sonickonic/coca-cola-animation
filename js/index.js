import cans from "./cans";
import { animationX, animationY, shake } from "./animation";

const hero = document.querySelector(".hero");
const can = document.querySelector(".hero__can");
const title = document.querySelector(".hero__title");
const description = document.querySelector(".hero__description");
const background = document.querySelector(".hero__background");
const button = document.querySelector(".hero__btn");
let shaker;

let index = 0;

const increment = () => {
  const last = cans.length - 1;
  index === last ? (index = 0) : (index += 1);
};

const removeOldStyle = () => {
  index === 0
    ? background.classList.remove(cans[3].style)
    : background.classList.remove(cans[index - 1].style);
};

const handleClick = () => {
  increment();
  title.innerHTML = cans[index].name;
  description.innerHTML = cans[index].description;
  removeOldStyle();
  index !== 1
    ? hero.classList.remove("hero--vanilla")
    : hero.classList.add("hero--vanilla");
  background.classList.add("hero__background", cans[index].style);
  can.src = cans[index].image;
};

const shakeDelay = () => {
  shaker = setTimeout(() => {
    shake.play();
  }, 2000);
};
button.addEventListener("click", (e) => {
  e.preventDefault();
  window.clearTimeout(shaker);
  setTimeout(() => {
    handleClick();
  }, 300);
  shakeDelay();
  animationX.play();
  animationY.play();
});
