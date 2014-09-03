var count = 0;
var x;
var y;
var total = 1000000;
var pi;


for (var i = 0 ; i < total; i++){

	x = Math.random();
	y = Math.random();

	if (Math.sqrt(x*x+y*y) <=1){
		count++
	}

}

pi = count/total*4;

console.log(pi,Math.PI, (pi-Math.PI)/Math.PI*100);