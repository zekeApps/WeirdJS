

function a() {
	function b() {
		console.log(myVar);			// notice myVar it is not declared inside function b
	}
	var myVar = 2;
	b();
	
}

var myVar = 1;
a();