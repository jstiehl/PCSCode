var shoppingCart = {
  itemCount: 0,
  add: function(itemObj){
  		this.itemCount += 1;
  		var itemID = "item"+this.itemCount;
  		this[itemID] = itemObj;
  		return itemID;
  },
  remove: function (remObj, x){
  	if (x > this[remObj].count){
  		console.log("You are trying to remove more items than you have!");
      return false;
  	}
  	else if (x === this[remObj].count){
  		delete this[remObj];
  		this.itemCount -= 1;
  	} else {
  		this[remObj].count -= x;
  	}
  },
  list: function () {
  	var descList = [];
    	for (var i = 1; i <= this.itemCount; i++){
    		descList.push(this["item"+i].count+" X " + this["item"+i].description);
    	}
    
    return descList;
  },
  total: function(){
    var totalCost = 0;
      for (var i = 1; i <= this.itemCount; i++){
        totalCost += this["item"+i].count*this["item"+i].price;
      }
    return totalCost;
  }
};


 function Order (item, quantity, cost) {
  this.description = item;
  this.count = quantity;
  this.price = cost;
  this.id = Math.floor(Math.random()*1000);
 }

 Order.prototype.cost = function (){
  return this.price * this.count;
 }

 Order.prototype.getID = function(){
  this.id = Math.floor(Math.random()*1000); /// david put this directly in constructor function
  return this.id;
 }


 var item1 = shoppingCart.add(new Order("Huggies Little Snugglers Diapers",4,19.77));

 var item2 = shoppingCart.add(new Order("Tylenol Extra Strength Acetaminophen",2,22.38));

 var item3 = shoppingCart.add(new Order("Flents Quiet Please Foam Ear Plugs",10,11.50));

 var item4 = shoppingCart.add(new Order("Monsters Eat Whiny Children",1,11.07));



/*var item1 = shoppingCart.add({description: "Huggies Little Snugglers Diapers",
                              count: 4,
                              price: 19.77});

var item2 = shoppingCart.add({description: "Tylenol Extra Strength Acetaminophen",
                              count: 2,
                              price: 22.38});

var item3 = shoppingCart.add({description: "Flents Quiet Please Foam Ear Plugs",
                              count: 10,
                              price: 11.50});

var item4 = shoppingCart.add({description: "Monsters Eat Whiny Children",
                              count: 1,
                              price: 11.07});
*/





shoppingCart.remove(item3, 6);
shoppingCart.remove(item4, 1);


console.log(shoppingCart.list());

/* Should print:
[
'4 X Huggies Little Snugglers Diapers',
'2 X Tylenol Extra Strength Acetaminophen',
'4 X Flents Quiet Please Foam Ear Plugs',
]
*/

console.log(shoppingCart.total());

// Should print: 169.84  