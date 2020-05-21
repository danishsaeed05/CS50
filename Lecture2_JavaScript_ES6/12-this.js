const person = {
	name: 'jordan',
	greet: function() {console.log('hello, ' + this.name)},  //method is a key where the value is a function
}

person.greet()

const friend = {
	name: 'david',
}

friend.greet = person.greet

friend.greet() //this will print "hello, david"

//explicitly bound the "this" in this bind function to be the ({name: " "}) object
const greet = person.greet.bind({name: 'this is a bound object'}) //stores new function and we invoke greet later
person.greet.call({name: 'this is a bound object'}) //immediately invoke
person.greet.apply({name: 'this is a bound object'}) //immediately invoke

//ES6 arrow notation
const newPerson = {
	name: 'newPerson',
	greet: () => {console.log('hi, ' + this.name)},
}
/*it will output "undefined" because "this" refers to the global object at the time its typed and this.name is 
undefined */
newPerson.greet() 

