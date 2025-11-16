const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

document.getElementById("show-signup").addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
});

document.getElementById("show-login").addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
});
