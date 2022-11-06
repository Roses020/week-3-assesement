console.log("hello world");

const picture = document.querySelector('img')



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted succesfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


 const image = document.querySelector("#catImage")

 function handleMouseover(){
	alert('thank you for being amazing');
 }
 image.addEventListener('mouseover', handleMouseover)
 