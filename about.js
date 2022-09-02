console.log("hello world");

const urCute = () => {
	// console.log('Ur Cute')
	alert('Ur Cute')
}
function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Form Submitted Successfully')
}


let form = document.querySelector('#contact');
let image = document.querySelector('#image')

form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', urCute)
