// Animate links one by one for smooth entry
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".links a");
  links.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = "1";
    }, index * 100);
  });
});

// Subtle gradient background movement
document.body.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.body.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #111, #000)`;
});
