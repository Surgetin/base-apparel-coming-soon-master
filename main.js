let email = document.getElementById("email");
let dangerIcon = document.getElementById('error_img');
let dangerText = document.getElementById("error_text");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    if (email.validity.typeMismatch) {
        e.preventDefault();
        dangerIcon.style.opacity = 1;
        dangerText.style.opacity = 1;
    } else {
        dangerIcon.style.opacity = 0;
        dangerText.style.opacity = 0;
    }
})