// const h1Value = document.querySelector("h1");
// console.log(h1Value.innerHTML);
// h1value.innerHTML += " This value was added in the DOM";

const myButton = document.querySelector(".btn");
const username = document.querySelector(".username")
const message = document.querySelector(".message");

// alert(myButton);

myButton.addEventListener('click', function() {

if (username.ariaValueMax.length > 0 ) {
alert('Hello, ' + username.value);
username.value = '';
}
else {
    alert('Please enter a name')
}

});