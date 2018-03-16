'use strict';

var s = 'Hello';
function greet(name){
	console.log(s+","+name+'!')
}
function goodBye(name){
	console.log("goodBye,"+name+'!')
}
module.exports = {
	greet:greet,
	goodBye:goodBye
};