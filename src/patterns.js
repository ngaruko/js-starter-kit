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
}

export function doTimers() {

}

export function doAsync() {

}

export function doPubSub() {

}

export function doPromises() {

}