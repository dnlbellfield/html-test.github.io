// const myHeading = document.querySelector('h1');
// console.log('myHeading :', myHeading);
// myHeading.textContent = `Hello, World!`;

const firstLiElement = document.querySelector('li');
firstLiElement.onclick = () => {
  alert('You have just touched the first li element');
}

document.querySelector('ul').onclick = () => {
  console.log("you've just touched somewhere in th Ul");
}

let myImage = document.querySelector('img');

myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/fox-2.jpeg') {
    myImage.setAttribute('src','images/fox.jpeg' )
  } else {
    myImage.setAttribute('src', 'images/fox-2.jpeg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let userName = prompt('What is your name?');
  if (!userName) {
    setUserName();
  }
  localStorage.setItem('name', userName);
  myHeading.textContent = "Welcome, " + userName + "!";
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName + "!";
}

myButton.onclick = () => { 
  setUserName();
}