import anime from "animejs/lib/anime.es.js";

var animationX = anime({
  targets: ".hero__can",
  translateX: [
    { value: -550, duration: 250 },
    { value: 550, duration: 0 },
    { value: 0, duration: 250, delay: 100 },
  ],
  opacity: [
    { value: 0, duration: 250 },
    { value: 0, duration: 0 },
    { value: 1, duration: 250, delay: 100 },
  ],
  autoplay: false,
  easing: "linear",
});

var animationY = anime({
  targets: ".hero__section",
  translateY: [
    { value: 200, duration: 200 },
    { value: -100, duration: 0 },
    { value: 0, duration: 200, delay: 200 },
  ],
  opacity: [
    { value: 0, duration: 200 },
    { value: 0, duration: 0 },
    { value: 1, duration: 200, delay: 200 },
  ],
  autoplay: false,
  easing: "linear",
});

export { animationX, animationY };
