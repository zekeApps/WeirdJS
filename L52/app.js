var person = {
    
    firstname: 'Default_name',
    lastname: 'Default_lastname',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

var jane = {
    firstname: 'Jane'   
}
    
// Do not do this EVER!  for demo purpose only!!

john.__proto__ = person; 
console.log(john.getFullName());
console.log(john.firstname);

jane.__proto__ = john;
console.log(jane.getFullName()); 