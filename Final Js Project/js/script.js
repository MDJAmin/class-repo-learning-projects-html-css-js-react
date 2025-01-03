"use strict";

// handle hamburger menu functionality
const menuIcon = document.querySelector("#menuIcon");
const overlay = document.querySelector(".overlay");
const navIcons = document.querySelector(".nav_icons");
const closeButton = document.querySelector(".close_button");

// Icons
const authIcon = document.querySelector("#authIcon"); // Login/Register link
const logoutIcon = document.querySelector("#logoutIcon"); // Logout icon

// Show/Hide sidebar
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
window.addEventListener("resize", handleResize);

// Handle user authentication state
const token = localStorage.getItem("token");

// If user is logged in, show the logout icon and hide the login link
if (token) {
  authIcon.style.display = "none";
  logoutIcon.style.display = "block";
}

// Handle logout
logoutIcon.addEventListener("click", () => {
  localStorage.removeItem("token"); // Remove token
  window.location.href = "Auth/index.html"; // Redirect to login page
});

// Handle animations on scroll
const productItems = document.querySelectorAll(".product-item");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add animation with a delay based on index
        entry.target.style.animationDelay = `${index * 0.2}s`;
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  },
  {
    threshold: 0.2, // Trigger when 20% of the item is visible
  }
);

// Observe each product item
productItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.2}s`; // Add a delay to the item itself
  observer.observe(item);
});
