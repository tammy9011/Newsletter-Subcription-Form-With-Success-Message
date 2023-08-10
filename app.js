const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
		e.preventDefault();
		document.getElementById("message-container").style.visibility = "visible";
		document.querySelector(".modal").style.visibility = "hidden";
		setTimeout(function() {
			e.target.submit()
		}, 2000)
	    validateInputs();
		
 });

 function successMessage() {
	document.getElementById("message-container").style.visibility = "visible";
	document.querySelector(".modal").style.visibility = "hidden";
 }

const setError = (element, message) =>{
	const formValidation = element.parentElement;
	const errorDisplay = formValidation.querySelector('.error');
	
	errorDisplay.innerText = message;
	formField.classList.add('error');
	formField.classList.remove('success');
}

const setSuccess = element => {
	const formValidation = element.parentElement;
	const errorDisplay = formValidation.querySelector('.error');
	
	errorDisplay.innerText = '';
	formField.classList.add('success');
	formField.classList.remove('error');
}



 const isValidEmail = email => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	 return re.test(String(email).toLowerCase());
}
 
 const validateInputs = () => {
	 const emailValue = email.value.trim();
	 
	 if(emailValue === '') {
		 setError(email, 'email address required');
	 }
	 else if(!isValidEmail(emailValue)) {
		 setError(email, 'valid email required');
	 }
	 else {
		 setSuccess(email);
	 }
 }

