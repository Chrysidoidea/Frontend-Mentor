const emailInput = document.querySelector(".email-input");
const submitBtn = document.querySelector(".submit-btn");
const successBtn = document.querySelector(".success-btn");
const warning = document.querySelector(".warning");
const emailValue = document.querySelector(".email-value");
const overlay = document.querySelector(".overlay-wrapper");

//email checker with regular expression filter
const validEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

//keep data inside an object (just for fun)
const data = {
  email: "",
};
 
//add data and render it in overlay page
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (validEmail(emailInput.value)) {
    emailInput.style.backgroundColor = "white";
    emailInput.style.borderColor = "var(--midnightBlue)";
    warning.style.display = "none";
    emailValue.textContent = data.email;
    overlay.style.display = "grid";
    emailInput.value = null;
  } else {
    emailInput.style.backgroundColor = "var(--invalidInput)";
    emailInput.style.borderColor = "var(--errorMessage)";
    warning.style.display = "block";
  }
});
successBtn.addEventListener("click", () => {
  email.data = "";
  overlay.style.display = "none";
});
//input handler
emailInput.addEventListener("input", () => {
  data.email = emailInput.value;

  if (validEmail(emailInput.value)) {
    emailInput.style.backgroundColor = "white";
    emailInput.style.borderColor = "var(--midnightBlue)";
    warning.style.display = "none";
  }
});