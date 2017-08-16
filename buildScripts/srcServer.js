import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = 3000,
	app = express(),
	compiler = webpack(config);
	
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: false,
	publicPath:config.output.publicPath
}));

// GET method route
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

// POST method route
app.post('/', function(req, res) {
	res.send('POST request to the homepage');
});

//create an API
app.get('/users', (req, res) => {
	//hard coded for simplicity....instead of reak db
	res.json([
		{ "id": 1, "firstName": "Bede", "lastName": "Ngaruko", "email": "bede@ngaruko.com" },
		{ "id": 2, "firstName": "tom", "lastName": "Mateo", "email": "tom@ngaruko.com" },
		{ "id": 3, "firstName": "Marc", "lastName": "Handy", "email": "marc@ngaruko.com" }

	]);
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}

});
