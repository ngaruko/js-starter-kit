import express from 'express';
import path from 'path';
import open from 'open';
	const port = 3000,
	app = express();
	
// GET method route
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

// POST method route
app.post('/', function(req, res) {
	res.send('POST request to the homepage');
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:'+ port);
	}
	
});
