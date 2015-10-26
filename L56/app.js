var person = {
	firstname: 'default_firstname',
	lastname: 'default_lastname',
	getFullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
}

var john = {
	firstname: 'John',
	lastname: 'Doe'
}

// do not do this EVER, for demo ONLY!!!
john.__proto__ = person;


for (var prop in john) {
	if(john.hasOwnProperty(prop)){
		console.log(prop + ": " + john[prop])
	}
}

var jane = {
	address: '111 Main St.',
	getFormalFullName: function() {
		return this.lastname + ', ' + this.default_firstname
	}
}

var jim = {
	getFirstName: function() {
		return firstname;
	}
}
