// Challenges and class code from Wednesday, January 29, 2014

// Use the class creation pattern to implement an Order class for a shopping cart. It should:

 //   Have properties for description, count, and price
 //   Have cost function on the prototype that returns price * count
 //   Have a getID function that returns a large random number

 function Order (item, quantity, cost) {
 	this.description = item;
 	this.count = quantity;
 	this.price = cost;
 }

 Order.prototype.cost = function (){
 	return this.price * this.count;
 }

 Order.prototype.getID = function(){
 	return this.id = Math.random()*1000;
 }


 var item1 = shoppingCart.add(new Order ("Huggies Little Snugglers Diapers",4,19.77))


 // I need to put this back into the shopping cart js file.