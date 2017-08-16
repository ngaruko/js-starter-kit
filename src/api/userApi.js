import 'whatwg-fetch';
import getBaseUrl from './baseUrl';
/* 	eslint-disable no-console	*/
const baseUrl = getBaseUrl();
function get(url) {
	return fetch(baseUrl + url).then(onSuccess, onError);
}
function onSuccess(response) {
	return response.json();
}
function onError(error) {
	return console.log(error);
}

function del(url) {
	const request = new Request(baseUrl + url, {
		method: 'DELETE'
	});
	return fetch(request).then(onSuccess, onError);
}

export function getUsers() {
	return get('users');
}
export function deleteUser(id) {
	return del(`users/${id}`);
}
