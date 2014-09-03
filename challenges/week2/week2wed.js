// Challenges from Wednesday night class on 1/22/2014
// I need to checkout Mozilla developer network
// function doAThing(callback){
// 	callback();
// }

// function makeMeASandwich() {
// 	console.log("Make your own damned sandwich!");
// }

// doAThing(makeMeASandwich);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var sum = 0;

// arr.forEach(function (value, index, theArray) {

// 	sum += value;

// });

// console.log(sum);

// How random is random
var randNumArr = [];

for (var i=0;i<10000;i++){
	randNumArr[i] = Math.floor(Math.random()*10);
}

var occurence = [];


// this counts the occurence of each digit 0-9 for the ranNumArr
for (var x = 0; x < 10; x++){
	var count = 0;
	randNumArr.forEach(function(value){

		if(value === x){
			count++;
		}

	});

	occurence.push(count);

}

console.log(occurence);


// Conditional operator?
// (condition) ? do this if true : do this if false;
// example count[items] ? count[items]+1: 1;



// randNumArr.sort(function (a,b){
// 	return a-b;
// });

// console.log(randNumArr);