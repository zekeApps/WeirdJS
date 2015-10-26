
function waitTenSeconds() {
	var ms = 10000 + new Date().getTime();
	while(new Date() < ms){}
	console.log('finished function');
}

function clickHandler() {
	console.log('click event!');
}

// listen for the click event

document.addEventListener('click', clickHandler);

waitTenSeconds();
console.log('finished execution');