// variables
const submitForm = document.querySelector('.form');
const email = document.querySelector('#email');
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const password = document.querySelector("#password");







eventListeners();

function eventListeners() {
    submitForm.addEventListener('submit', validateForm);

}
 




//functions
function validateForm(e) {
  e.preventDefault();
  validate(email);
  validate(firstName);
  validate(lastName);
  validate(password);
}

function validate(field) {
  let error = field.parentElement.querySelector("p.error");
  let errorIcon = field.parentElement.querySelector("img.error-icon");

  if (!error && field.value === "") {
    error = document.createElement("p");
    errorIcon = document.createElement("img");

    error.textContent = `${field.placeholder} cannot be empty`;
    error.className = "error";
    field.parentElement.appendChild(error);

    errorIcon.src = "images/icon-error.svg";
    errorIcon.className = "error-icon";
    field.parentElement.appendChild(errorIcon);

    field.style.border = "2px solid hsl(0, 100%, 74%)";
  } else if (error && field.value !== "") {
    field.style.border = "solid 1px hsl(246, 25%, 77%";
    field.parentElement.removeChild(error);
    field.parentElement.removeChild(errorIcon);
  }
}
 

