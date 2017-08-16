import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
	it('should pass', () => {
		expect(2 === 3 - 1).to.equal(true);
	});
});

describe('index.html', () => {
	it('should say Invincible', (done) => {//note; since we are using async calls, we need the done, otherwsie, doesnt work
		const index = fs.readFileSync('./src/index.html', "utf-8");
		jsdom.env(index, (err, window) => {
			const header = window.document.getElementsByTagName('h1')[0];
			expect(header.innerHTML).to.equal('We are invinciblev');
			done();
			window.close();
		});
	});
});