// === Slideshow ===
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// === Dark Mode with Persistence ===
const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    localStorage.setItem('dark-mode', document.body.classList.contains("dark-mode"));
});
