import gsap from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const repeat = document.querySelector(".repeat");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");

let isRepeat = sessionStorage.getItem("isRepeat") === "true";
let isYoyo = sessionStorage.getItem("isYoyo") === "true";

const animation = gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  borderRadius: "50%",
  scale: 1.25,
  duration: 4,
});

play.addEventListener("click", () => {
  animation.play(); // Method GSAP to play the animation
});
pause.addEventListener("click", () => {
  animation.pause(); // Method GSAP to pause the animation
});
resume.addEventListener("click", () => {
  animation.resume(); // Method GSAP to resume the animation
});
restart.addEventListener("click", () => {
  animation.restart(); // Method GSAP to restart the animation
});
reverse.addEventListener("click", () => {
  animation.reverse(); // Method GSAP to reverse the animation
});
repeat.addEventListener("click", () => {
  isRepeat = !isRepeat;
  sessionStorage.setItem("isRepeat", isRepeat);
  animation.repeat(isRepeat ? 2 : 0);
  repeat.classList.toggle("active", isRepeat);
});
kill.addEventListener("click", () => {
  animation.kill(); // Method GSAP to kill the animation
});
yoyo.addEventListener("click", () => {
  isYoyo = !isYoyo;
  sessionStorage.setItem("isYoyo", isYoyo);
  animation.yoyo(isYoyo);
  yoyo.classList.toggle("active", isYoyo);
});

// Set initial button states
repeat.classList.toggle("active", isRepeat);
yoyo.classList.toggle("active", isYoyo);
