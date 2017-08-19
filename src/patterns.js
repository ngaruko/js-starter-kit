export function doChaining() {
	const Calc = function(start) {
		let answer = this;
		this.add = x => {
			start += x;
			return answer;
		};
		this.multiply = x => {
			start *= x;
			return answer;
		};
		this.equals = callback => {
			callback(start);
			return answer;
		};
	};

	new Calc(0)
		.add(1)
		.add(2)
		.multiply(3).equals(function(result) {
			console.log(result);//
		});
	
	
	//Observables
	const Book = function(name, price) {
		let priceChanging = [],
		 priceChanged = [];
		this.name = () => {
			return name;
		};
		this.price = function(val)  {
			if (val !== undefined && val !== price) {
				for (let i = 0; i < priceChanging.length; i++){
					if (!priceChanging[i](this, val)) {
						return price;
					}
				}
				price = val;
				for (let i = 0; i < priceChanged.length; i++) { 
					priceChanged[i](this);
				}
			}
			return price;
		};
		this.onPriceChanging = callback => {
			priceChanging.push(callback);
		};
		this.onPriceChanged = callback => {
			priceChanged.push(callback);
		};

	};
	let book = new Book('Inside the mind of hackers', 24.99);
	console.log(`Book Title: ${book.name()}. Cost ${book.price()}. `);//using a method
	book.onPriceChanging((b, price) => {
		if (price > 100) {
			console.log('Error. Too high');
			return false;
		}	
		return true;	
	});
	book.onPriceChanged(b => {
		console.log(`Price changed to $ ${b.price()}`);
	});
	book.price(19.90);
	book.price(200);
	book.price(87.00);//can also use ES5 properties for current browsers....but !
}

export function doTimers() {

}

export function doAsync() {

}

export function doPubSub() {

}

export function doPromises() {

}