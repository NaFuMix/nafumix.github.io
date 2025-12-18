import { datas } from "./data.js";

let currentIndex = 0;
const intervalTime = 4500;

let slideInterval;

const titleEl = document.getElementById("title");
const descEl = document.getElementById("description");
const imgEl = document.getElementById("slideImage");
const linkEl = document.getElementById("projectLink");
const progressBar = document.getElementById("progressBar");
const dotsContainer = document.getElementById("dots");

const textBox = document.querySelector(".text");
const imageBox = document.querySelector(".image");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// =====================
function createDots() {
  dotsContainer.innerHTML = "";
  datas.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === currentIndex) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
      resetAutoSlide();
    });

    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// =====================
function showSlide(index) {
  textBox.classList.remove("show");
  imageBox.classList.remove("show");

  setTimeout(() => {
    titleEl.textContent = datas[index].header;
    descEl.textContent = datas[index].text;
    imgEl.src = datas[index].img_url;
    linkEl.href = datas[index].link;

    textBox.classList.add("show");
    imageBox.classList.add("show");
    updateDots();
    startProgress();
  }, 300);
}

// =====================
function nextSlide() {
  currentIndex = (currentIndex + 1) % datas.length;
  showSlide(currentIndex);
  resetAutoSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + datas.length) % datas.length;
  showSlide(currentIndex);
  resetAutoSlide();
}

// =====================
function startAutoSlide() {
  slideInterval = setInterval(nextSlide, intervalTime);
  startProgress();
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

// =====================
function startProgress() {
  progressBar.style.transition = "none";
  progressBar.style.width = "0%";

  setTimeout(() => {
    progressBar.style.transition = `width ${intervalTime}ms linear`;
    progressBar.style.width = "100%";
  }, 50);
}

// =====================
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// init
createDots();
showSlide(currentIndex);
startAutoSlide();