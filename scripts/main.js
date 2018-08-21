
var myHeading = document.querySelector('h1');
myHeading.textContent = 'MDN Javascript is awesome';
var myButton = document.querySelector('button');
var myImage = document.querySelector('img');

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Javascript is Cool,' + storedName;
}

myButton.onclick = function(){
    setUserName();
}

document.querySelector('html').onclick = function(){
    console.log('Ouch! stop pocking me');
    
}

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute ('src','images/Javascript.png');
      } else {
        myImage.setAttribute ('src','images/firefox-icon.png');
    }
    
}

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Javascript is Cool,' + myName;    
}

