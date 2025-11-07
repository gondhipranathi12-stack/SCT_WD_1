// Change Navbar Background on Scroll
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
  .classList.toggle("scrolled", window.scrollY > 0);
});

// Mobile Menu Toggle
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}
