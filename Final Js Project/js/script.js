"use strict";

// handle hamburger menu functionality

const menuIcon = document.querySelector("#menuIcon");
const overlay = document.querySelector(".overlay");
const navIcons = document.querySelector(".nav_icons");
const closeButton = document.querySelector(".close_button");

const showSidebar = () => {
  navIcons.classList.add("show-icons");
  overlay.classList.add("show-overlay");
};

const hideSidebar = () => {
  navIcons.classList.remove("show-icons");
  overlay.classList.remove("show-overlay");
};

const handleResize = () => {
  if (window.innerWidth > 500) {
    hideSidebar();
  }
};

menuIcon.addEventListener("click", showSidebar);
closeButton.addEventListener("click", hideSidebar);
overlay.addEventListener("click", hideSidebar);
window.addEventListener("resize", handleResize)

