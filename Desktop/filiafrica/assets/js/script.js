const menuToggler = document.querySelector(".menu-toggler");
const mobileNav = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");

const themeToggler = document.querySelector(".theme-toggler");

const header = document.querySelector("header");

document.addEventListener("DOMContentLoaded", function() {
    var loader = document.querySelector(".loader");
    
    // Add "active" class to loader
    loader.classList.add("active");
    
    // Remove "active" class after 5 seconds
    setTimeout(function() {
        loader.classList.remove("active");
    }, 3000); // 5000 milliseconds = 5 seconds
});

window.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    header.style.background = "var(--bg)";
  } else {
    header.style.background = "transparent";
  }
});

menuToggler.addEventListener("click", function (){
    mobileNav.classList.add("active");
})

closeBtn.addEventListener("click", function (){
    mobileNav.classList.remove("active");
});

function toggleTheme() {
    if (document.body.classList.contains("dark-mode")) {
        const darkClass = document.querySelector(".dark");
        const lightClass = document.querySelector(".light");
        darkClass.classList.add("active");
        lightClass.classList.remove("active");
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", "light"); // Store theme preference
    } else {
        const darkClass = document.querySelector(".dark");
        const lightClass = document.querySelector(".light");
        lightClass.classList.add("active");
        darkClass.classList.remove("active");
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", "dark"); // Store theme preference
    }
}

// Event listener for theme toggler
themeToggler.addEventListener("click", toggleTheme);

// Check if theme preference is stored in localStorage
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
    if (storedTheme === "dark") {
        toggleTheme(); // Apply dark theme if stored preference is dark
    }
}


