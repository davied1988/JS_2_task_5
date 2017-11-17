var myButtons = document.getElementsByClassName('button'),
	arrayLength = myButtons.length;

for (var i = 0; i < arrayLength; i++) {
	console.log(myButtons[i].innerText);
	alert(myButtons[i].innerText);
}

console.log(arrayLength);