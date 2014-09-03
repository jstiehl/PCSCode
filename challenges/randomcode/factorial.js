function factorial (x) {

	if (x<= 1) return 1;
	return x* factorial (x-1);

}

console.log(factorial(10));


// permutations for picking r objects from a total of n objects with no repetition (order matters)
function permutations (n, r) {

	return factorial(n)/factorial(n-r);


}


// combinations for picking r objects from a total of n objects with no repetition (order does not matter)
function combinations (n, r) {

	return factorial(n)/factorial(n-r)/factorial(r);

}


console.log(permutations(10,2));
console.log(combinations(10,2));
