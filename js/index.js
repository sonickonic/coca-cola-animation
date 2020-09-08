import cans from "./cans";

const can = document.querySelector(".hero__can");
const title = document.querySelector(".hero__title");
const description = document.querySelector(".hero__description");
const background = document.querySelector(".hero");
const button = document.querySelector(".hero__btn");

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
  background.classList.add("hero", cans[index].style);
  can.src = cans[index].image;
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  handleClick();
});
