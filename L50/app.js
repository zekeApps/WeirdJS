var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function() {
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
}

var person2 = {
	firstname : 'Jane',
	lastname : 'Doe'
}

var logName = function(lang1, lang2) {
	console.log('Logged as: ' + this.getFullName());
	console.log('Languages: ' + lang1 + ' ' + lang2 );
	console.log('--------------------');
}

logName.apply(person, ['en', 'fr']);
console.log(person.getFullName.apply(person2));