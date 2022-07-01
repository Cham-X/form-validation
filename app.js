class User{
  constructor( firstname, lastname,email,password,confirmPassword) {
    this.firstname = firstname.value,
    this.lastname = lastname.value,
    this.email = email.value,
    this.password = password.value,
    this.confirmPassword = confirmPassword.value;
  }
}

 const  firstname = document.querySelector('#firstname'), //.value.trim(),
        lastname = document.querySelector('#lastname'), //.value.trim(),
        email = document.querySelector('#email'),//.value.trim(),
        password = document.querySelector('#password'),//.value.trim(),
        confirmPassword = document.querySelector('#confirm-password');//.value.trim();

document.getElementById('reg-form').addEventListener('submit', (e) => {

   const user = new User( firstname, lastname, email, password, confirmPassword);
  
   var name = document.getElementById('firstname');
   var surname = document.getElementById('lastname');
   var re = /^[a-zA-Z]{3,12}$/;
  
  if (name.value === '') {
    setError('All fields must not empty', firstname)
  } else if(!re.test(name.value)){
    setError('firstname must contain between 3 t0 12 character', firstname)
  } else {
    setSuccess(firstname)
  }

  if (lastname.value === ''){
    setError('All fields must not empty', lastname)
  } else if (!re.test(surname.value)){
    setError('Lastname must contain between 3 to 12 characters', lastname )
  }else{
    setSuccess(lastname)
  }

  if(email.value === ''){
    setError('All fields must not be empty', email)
  }else{
    setSuccess(email)
  }

  if ( password.value === ''){
    setError('All fields must not be empty', password)
  }else if ( password.value.length < 6){
     setError('Password must not be less than 6 character', password)
  } else {
    setSuccess(password)
  }

  if (confirmPassword.value === ''){
    setError('All fields must not be empty', confirmPassword)
  }else if (confirmPassword.value !== password.value){
    setError('Confirm password Again', confirmPassword)
  }else{
    setSuccess(confirmPassword)
  }

  setTimeout( setError , 200);
  
//  console.log( setError.errorDisplay)
   e.preventDefault();
});

// document.getElementById('firstname').addEventListener('blur',validateFirstname);
// document.getElementById('lastname').addEventListener('blur',validateLastname);
// document.getElementById('email').addEventListener('blur',validateEmail);
// document.getElementById('password').addEventListener('blur',validatePassword);
// document.getElementById('confirm-password').addEventListener('blur',validateConfirmPassword);

// function validateFirstname(){
  
// }
// function validateLastname(){
 
// }
// function validateEmail(){

// }
// function validatePassword(){

// }
// function validateConfirmPassword(){
  
// }

const setError = ( message , element ) => {

  const wrapperBorder = element.parentElement;
  const errorDisplay = element.parentElement.nextElementSibling;

  errorDisplay.innerText = message;
  wrapperBorder.style.borderColor = 'red';

  // setTimeout(function(){errorDisplay.remove();
  // wrapperBorder.style.borderColor = '#ffff'; }, 4000);
  
}


const setSuccess = (element) => {
  const wrapperBorder = element.parentElement;
  const errorDisplay = element.parentElement.nextElementSibling;

  wrapperBorder.style.border = '1.3px solid #ffffff';
  errorDisplay.style.innerText = '';

  clearFields();
  // alert('Registration successful');
 
}

const clearFields = () => {
  firstname = '';
  lastname = '';
  email = '';
  password = '';
  confirmPassword = '';
}