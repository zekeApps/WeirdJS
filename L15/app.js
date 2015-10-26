function b() {
	var myVar;
	console.log ("myVar inside b is: " + myVar);
}

function a() {
	var myVar = 2;
	console.log("myVar inside a is: " + myVar);
	b();
}

var myVar = 1;
console.log("myVar at Global is :" + myVar)

a();