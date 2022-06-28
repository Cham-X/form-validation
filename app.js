class User{
  constructor( firstname, lastname,email,password,confirmPassword) {
    this.firstname = firstname,
    this.lastname = lastname,
    this.email = email,
    this.password = password,
    this.confirmPassword = confirmPassword;
  }
}

 const firstname = document.querySelector('#firstname'), //.value.trim(),
        lastname = document.querySelector('#lastname'), //.value.trim(),
        email = document.querySelector('#email'),//.value.trim(),
        password = document.querySelector('#password'),//.value.trim(),
        confirmPassword = document.querySelector('#confirm-password');//.value.trim();

document.getElementById('reg-form').addEventListener('submit', (e) => {

   const user = new User( firstname, lastname, email, password, confirmPassword);
  
   validateFirstname();
   validateLastname();
   validateEmail();
   validatePassword();
   validateConfirmPassword();

   e.preventDefault();
});

document.getElementById('firstname').addEventListener('blur',validateFirstname);
document.getElementById('lastname').addEventListener('blur',validateLastname);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('password').addEventListener('blur',validatePassword);
document.getElementById('confirm-password').addEventListener('blur',validateConfirmPassword);

function validateFirstname(){
  if (firstname.value === ''){
    setError('All fields must not be empty', firstname)
 }else if ( firstname.value.length < 3 || firstname.length > 12){
   setError('Firstname must not be less than 3 and greater than 12 characters', firstname )
 }else{
   setSuccess(firstname)
 }
}
function validateLastname(){
  if (lastname.value === ''){
    setError('All fields must not empty', lastname)
  }else if (lastname.value.length < 3 || lastname.value.length > 12){
    setError('Lastname must not be less than 3 and greater than 12 characters', lastname )
  }else{
    setSuccess(lastname)
  }

}
function validateEmail(){
  if(email.value === ''){
    setError('All fields must not be empty',email)
  }else{
    setSuccess(email)
  }
}
function validatePassword(){
  if ( password.value === ''){
    setError('All field must be filled', password)
  }else if ( password.value.length < 6){
     setError('Password must not be less than 6 character', password)
  } else {
    setSuccess(password)
  }
}
function validateConfirmPassword(){
  if (confirmPassword.value === ''){
    setError('All field must be filled', confirmPassword)
  }else if (confirmPassword.value !== password.value){
    setError('Enter password Again', confirmPassword)
  }else{
    setSuccess(confirmPassword)
  }
}

const setError = ( message , element ) => {

  const wrapperBorder = element.parentElement,
        errorDisplay = element.parentElement.nextElementSibling;

  errorDisplay.innerText = message;
  wrapperBorder.style.borderColor = 'red';

  setTimeout(function(){errorDisplay.remove(); wrapperBorder.style.borderColor = '#ffff'; 
}, 4000);

}

const setSuccess = (element) => {
  const wrapperBorder = element.parentElement;

  wrapperBorder.style.border = '1.3px solid #ffffff';

  alert('Registration successful');
  clearFields()
}

const clearFields = () => {
  firstname.value = '';
  lastname.value = '';
  email.value = '';
  password.value = '';
  confirmPassword = '';
}