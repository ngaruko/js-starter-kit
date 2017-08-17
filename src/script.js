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
export default function doYourThing() {
	cat.speak('cat object: ' + cat.sound);
	const doggy = new dog('Poodle', 'big');

	display(`My dog is a ${doggy.size}  ${doggy.breed}`);

	new Catty('Fluffy', 'whatever').speak();
}