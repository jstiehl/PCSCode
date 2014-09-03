var fs = require('fs');  // this is where we loaded up the fs module.
var color = require('colors');
// reads contents of file hello.txt and stores it in variable contents as a string
var contents = fs.readFileSync('hello.txt',{encoding: 'utf8'} );  
// syn stands for synchronous.  in this example, nothing further gets executed until the 
// file has been read.

// Asynchronous version of the readFile method. does not return a value therefore
// no var contents = like we did in the Sync version of the method
fs.readFile('hello.txt', {encoding: 'utf8'}, function(err, data){
	if(err) throw err;
	console.log(data+" Something else");
})

console.log(contents);
console.log('Hi mom!'.rainbow);

// make a list of all states
// need to find all possible pair combinations
// are there any distinct combinations which are anagrams of each other