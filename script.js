const menuToggle = document.getElementById(“menu-toggle”);
const navLinks = document.getElementById(“nav-links”);

menuToggle.addEventListener(“click”, function () {
const isOpen = navLinks.classList.toggle(“active”);

menuToggle.setAttribute("aria-expanded", isOpen);
menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
);
menuToggle.textContent = isOpen ? "✕" : "☰";

});

document.querySelectorAll(”.nav-links a”).forEach(function (link) {
link.addEventListener(“click”, function () {
navLinks.classList.remove(“active”);
menuToggle.setAttribute(“aria-expanded”, “false”);
menuToggle.setAttribute(“aria-label”, “Open navigation menu”);
menuToggle.textContent = “☰”;
});
});

document.getElementById(“current-year”).textContent =
new Date().getFullYear();

const profilePhoto = document.getElementById(“profile-photo”);

profilePhoto.addEventListener(“error”, function () {
profilePhoto.alt = “PLACEHOLDER: Add your profile photo as profile.jpg”;
});

document.querySelectorAll(”.placeholder-link”).forEach(function (link) {
link.addEventListener(“click”, function (event) {
if (link.getAttribute(“href”) === “#”) {
event.preventDefault();

        const message = document.createElement("div");
        message.className = "placeholder-message";
        message.textContent =
            "PLACEHOLDER: Add the correct GitHub or project URL first.";
        document.body.appendChild(message);
        requestAnimationFrame(function () {
            message.classList.add("show");
        });
        setTimeout(function () {
            message.classList.remove("show");
            setTimeout(function () {
                message.remove();
            }, 300);
        }, 2500);
    }
});

});