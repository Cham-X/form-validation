class User{
  constructor( firstname, lastname,email,password,confirmPassword) {
    this.firstname = firstname.value,
    this.lastname = lastname.value,
    this.email = email.value,
    this.password = password.value,
    this.confirmPassword = confirmPassword.value;
  }
}

 const  firstname = document.querySelector('#firstname'), 
        lastname = document.querySelector('#lastname'), 
        email = document.querySelector('#email'),
        password = document.querySelector('#password'),
        confirmPassword = document.querySelector('#confirm-password');

document.getElementById('reg-form').addEventListener('submit', (e) => {

   const user = new User( firstname, lastname, email, password, confirmPassword);
   
  validateName();
  validateLastname();
  validateEmail();
  validatePassword();
  validateConfirmPassword()
  ValidatedForm();
  
});

const validateName = function(){
  var name = document.getElementById('firstname');
  var re = /^[a-zA-Z]{3,12}$/;

  if (name.value === '') {
  setError('All fields must not empty', firstname)
  } else if(!re.test(name.value)){
  setError('firstname must contain between 3 t0 12 character', firstname)
  } else {
  setSuccess(firstname)
  return true
  }
}

const validateLastname = function(){
  var surname = document.getElementById('lastname');
  var re = /^[a-zA-Z]{3,12}$/;

  if (surname.value === ''){
    setError('All fields must not empty', lastname)
    } else if (!re.test(surname.value)){
    setError('Lastname must contain between 3 to 12 characters', lastname )
    } else{
    setSuccess(lastname)
    return true
    }
}  

const validateEmail = function(){
if(email.value === ''){
  setError('All fields must not be empty', email)
  }else{
  setSuccess(email)
  return true
  }
}

const validatePassword = function(){
  if ( password.value === ''){
    setError('All fields must not be empty', password)
    }else if ( password.value.length < 6){
      setError('Password must not be less than 6 character', password)
    } else {
    setSuccess(password)
    return true
    }
}

const validateConfirmPassword = function(){
  if (confirmPassword.value === ''){
    setError('All fields must not be empty', confirmPassword)
    }else if (confirmPassword.value !== password.value){
    setError('Confirm password Again', confirmPassword)
    } else {
    setSuccess(confirmPassword)
    return true
    }
}

const ValidatedForm = function(){
  const user = new User( firstname, lastname, email, password, confirmPassword);

    if (validateName() === true && validateLastname() === true && validateEmail() === true && validatePassword() === true && validateConfirmPassword() === true){
      alert(`Congratulations! ${user.firstname},\n Your registration was successful`);
  }
}
 

 

const setError = ( message , element ) => {
  const wrapperBorder = element.parentElement;
  const errorDisplay = element.parentElement.nextElementSibling;

  errorDisplay.innerText = message;
  wrapperBorder.style.borderColor = 'red';
  
}

const setSuccess = (element) => {
  const wrapperBorder = element.parentElement;
  const errorDisplay = element.parentElement.nextElementSibling;

  wrapperBorder.style.border = '1.3px solid #ffffff';
  errorDisplay.innerText = '';

}

