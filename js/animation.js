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

var shake = anime({
  targets: ".hero__can",
  rotate: [
    { value: 5, duration: 100 },
    { value: -5, duration: 100 },
    { value: 5, duration: 100 },
  ],
  easing: "easeInOutQuad",
  direction: "alternate",
  autoplay: false,
});

document.addEventListener("DOMContentLoaded", () => {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 1000,
  });

  tl.add({
    targets: ".hero__logo",
    translateY: ["110%", 0],
    delay: 400,
    duration: 1000,
    easing: "easeOutSine",
  })
    .add({
      targets: ".hero__can",
      scale: [1.5, 1],
      opacity: [0, 1],
    })
    .add(
      {
        targets: ".hero__background",
        scale: [0.8, 1],
        opacity: [0, 1],
      },
      "-=900"
    )
    .add(
      {
        targets: ".hero__section",
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: "linear",
        duration: 400,
      },
      "-=400"
    )
    .add(
      {
        targets: ".hero__btn",
        translateX: [100, 0],
        opacity: [0, 1],
        easing: "linear",
        duration: 400,
      },
      "-=400"
    )
    .add(
      {
        targets: ".hero__btn-img",
        translateX: [100, 0],
        opacity: [0, 1],
        easing: "linear",
        duration: 400,
      },
      "-=400"
    );
});

export { animationX, animationY, shake };
