
import display from './display';


const cat = {
	name: 'Fluffy',
	color: 'grey'
};
cat.age = 5;
cat.sound = "miao";
cat.speak = speech => {
	display(speech);
};


	//statically type as in ES6
function dog(breed, size) {
	this.breed =breed;
	this.size = size;
}
	//use object.create()
const cow = Object.create(Object.prototype,
	{
		name: {
			value:  'Fuffy',
			enumerable: true,
			writable:true,
			configurable:true		
		},
		color: {
			value: 'white',
			enumerable: true,
			writable: true,
			configurable: true	
	}	
	});

	//ES6 class-like constructor
class Catty{
	constructor(breed, size) {
		this.breed = breed;
		this.size = size;			
	}
	speak() {
		display('Moo');
	}

}

//objects properties
const person = {
	name: { first: 'Miki', last: 'Mouse' },
	age: 68
};
//getters and setters
Object.defineProperty(person, 'fullName',
	{
		get: function()  {
			return this.name.first + ' ' + this.name.last;
		}
	});

export default function doYourThing() {
	'use strict';
	cat.speak('cat object: ' + cat.sound);
	const doggy = new dog('Poodle', 'big');

	display(`My dog is a ${doggy.size}  ${doggy.breed}`);

	new Catty('Fluffy', 'whatever').speak();

	display(Object.getOwnPropertyDescriptor(person, 'name'));
	Object.defineProperty(person, 'age', { writable: false });
	display(Object.getOwnPropertyDescriptor(person, 'age'));
	//person.age = 78; //will throw error
	person.name.first = 'Kitty';
	display(person.name.first);
	//object freeze
	//Object.freeze(person.name);
	//person.name.first = 'Katty';
	//display(person.name.first);//wont work
	
	//Enumerables
	for (const propertyName in person) {
		display(`${propertyName}: ${person[propertyName]}`);
		display('Keys: ' + Object.keys(person));
		//serialisation
		display(JSON.stringify(person));
	}

	//getters and setters
	display('Full Name: ' + person.fullName);
}