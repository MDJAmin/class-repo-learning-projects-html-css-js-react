"use strict";

const container = document.querySelector(".container");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

let imageEls = [];
let currentIndex = 0;

// Fetch images from Picsum API
fetch("https://picsum.photos/v2/list?page=2&limit=6")
  .then(res => res.json())
  .then(data => {
    // Create <img> elements dynamically
    data.forEach((img, index) => {
      let image = document.createElement("img");
      image.src = img.download_url;
      image.alt = "Slider image";
      if (index === 0) image.classList.add("show");
      container.appendChild(image);
    });

    // Update NodeList after adding images
    imageEls = document.querySelectorAll(".container img");
  })
  .catch(err => console.error("Error fetching images:", err));

// Next Button
nextBtn.addEventListener("click", () => {
  if (imageEls.length === 0) return;

  imageEls[currentIndex].classList.remove("show");
  currentIndex = (currentIndex === imageEls.length - 1) ? 0 : currentIndex + 1;
  imageEls[currentIndex].classList.add("show");
});

// Prev Button
prevBtn.addEventListener("click", () => {
  if (imageEls.length === 0) return;

  imageEls[currentIndex].classList.remove("show");
  currentIndex = (currentIndex === 0) ? imageEls.length - 1 : currentIndex - 1;
  imageEls[currentIndex].classList.add("show");
});