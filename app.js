// variables
submitForm = document.querySelector('.form');
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
    if (field.value === '') {
    const error = document.createElement('p');
        error.textContent = `${field.placeholder} cannot be empty`;
        error.className = 'error';
        field.parentElement.appendChild(error);

    const errorIcon = document.createElement('img');
        errorIcon.src = 'images/icon-error.svg';
        errorIcon.className = 'error-icon';
        field.parentElement.appendChild(errorIcon);
        
        field.style.border = "2px solid hsl(0, 100%, 74%)";
    }

    if (field.parentElement.classList.contains()) {

    }



}