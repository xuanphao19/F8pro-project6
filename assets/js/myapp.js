AOS.init();

// ==== Sliders ====

const sliders = document.querySelector(".sliders");
const item = sliders?.querySelector(".slider-item");
const dots = [...document.querySelectorAll(".dot")];

dots.forEach((dot, index) => {
  dot.onclick = () => {
    const activeDot = document?.querySelector(".dot.active");
    if (activeDot) {
      activeDot?.classList.remove("active");
    }

    dot.classList.add("active");
    sliders.style.transform = `translateX(${-1 * item.offsetWidth * index}px)`;
  };
});

// ==== Play/Pause Video ====

const container = document.querySelector(".designer-video");
const videos = container.querySelector(".video");
const thumbnail = container.querySelector(".thumbnail");
const ctrlPlay = container.querySelector(".ctrl-play");
let isPlaying = false;

const playVideo = () => videos.play();
const pauseVideo = () => videos.pause();
const handelThumbnail = (isPlaying) => {
  if (isPlaying) {
    container.classList.add("playing");
  } else {
    container.classList.remove("playing");
  }
};

container.onclick = (event) => {
  const target = event.target;

  if (target.closest(".ctrl-play")) {
    playVideo();
  } else {
    pauseVideo();
  }
};

videos.addEventListener("play", () => {
  isPlaying = true;
  handelThumbnail(isPlaying);
});

videos.addEventListener("pause", () => {
  isPlaying = false;
  handelThumbnail(isPlaying);
  thumbnail.style.zIndex = "unset";
  ctrlPlay.style.zIndex = 1;
});

thumbnail.addEventListener("transitionend", () => {
  if (isPlaying) {
    thumbnail.style.zIndex = -1;
    ctrlPlay.style.zIndex = -1;
  }
});

// ==== Accordions ====

const questions = [...document.querySelectorAll(".questions")];

questions.forEach((question) => {
  question.onclick = (event) => {
    event.stopPropagation();
    const itemTarget = event.target.closest(".item");
    const isTarget = event.target.closest(".question .icon");
    const items = Array.from(question.querySelectorAll(".active"));

    if (isTarget && itemTarget) {
      itemTarget.classList.toggle("active");
      items.forEach((item) => {
        item !== itemTarget && item.classList.remove("active");
      });
    }
  };
});