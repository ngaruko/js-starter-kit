const maxTime = 1000;
//If input is even, double it
//If odd, error
//(call takes random amount of time < 1s)
const evenDoubler = (value, callback) => {
	const waitTime = Math.floor(Math.random() * (maxTime + 1));
	if (value % 2) {
		setTimeout(() => {
			callback(new Error('Odd number'));
		},waitTime);
	} else {
		setTimeout(() => {
			callback(null, value*2, waitTime);
		}, waitTime);
	}
};


const handleResults = (err, results, time) => {
	if (err) {
		console.log('ERROR: ' + err.message);
	} else {
		console.log(`Results are: ${results} (${time} ms)`);
}	
};

evenDoubler(4, handleResults);
evenDoubler(7, handleResults);
evenDoubler(10, handleResults);
console.log('--------');