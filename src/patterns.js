import { getUsers, deleteUser } from './api/userApi';
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
		this.price = function(val) {
			if (val !== undefined && val !== price) {
				for (let i = 0; i < priceChanging.length; i++) {
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
	//setTimeout(function() { alert("Hello"); }, 3000);
	var x = global.document.getElementById("txt");
	setTimeout(function() { x.value = "2 seconds"; }, 2000);
	setTimeout(function() { x.value = "4 seconds"; }, 4000);
	setTimeout(function() { x.value = "6 seconds"; }, 6000);

	console.log('Doing Timers');
	getUsers().then(result => {
		let usersBody = '<p>......</p>';
		result.forEach(user => {
			usersBody += ` <div>
		<p>${user.firstName}</p> </div>`;
		});
		global.document.getElementById('users2').innerHTML = usersBody;

	});

}

export function doAsync() {

}

export function doPubSub() {

}

export function doPromises() {

	const Promise = function() {
		let data = '',
			done = [],
			fail = [],
			status = 'progress';
		this.done = function(fn) {
			done.push(fn);
			if (status === 'done') {
				fn(data);
			}
			return this;
		};

		this.failed = function(fn) {
			fail.push(fn);
			if (status === 'fail') {
				fn(data);
			}
			return this;
		};

		this.resolve = function(result) {
			if (status !== 'progress') {
				throw `Promise already completed with ${status}`;
			}
			status = 'done';
			data = result;
			for (let i = 0; i< done.length; i++){
				done[i](data);
			}
			return this;
		};

		this.fail = function(reason) {

		};

	};

	var promise = new Promise();
	setTimeout(() => {
		promise.resolve();
	}, 1000);

	setTimeout(() => {
		promise.done(data => {
			console.log('Handler added after deferred object is done');
		});
	}, 2000);

	promise.done((data) => {
		console.log('Deferred object has completed');
	});

	var promise2 = new Promise();
	promise2.failed(() => {
		console.log('Promise 2 failed');
	}).done(() => {
		console.log('Promise 2 has completed');
	});

	setTimeout(() => {
		promise2.fail();
	}, 1000);

	console.log('Application completed');


}