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
  }, 300);
}

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

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

createDots();
showSlide(currentIndex);
startAutoSlide();