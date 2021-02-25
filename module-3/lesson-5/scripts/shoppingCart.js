let arrShoppingCart = [
  {
    name:"loaf of bread",
    type:"food",
    quantity:1,
    price:.85
  },
  { 
    name:"multipack beans",
    type:"food",
    quantity:1,
    price:1
},
{ 
  name:"mushrooms",
  type:"food",
  quantity:10,
  price:.1
},
{
  name:"can of beer",
  type:"alcohol",
  quantity:4,
  price:1.1
},
{
  name:"prosecco",
  type:"alcohol",
  quantity:1,
  price:8.99
},
{
  name:"steak",
  type:"food",
  quantity:2,
  price:3.99
},
{
  name:"blue cheese",
  type:"food",
  quantity:1,
  price:2.99
},
{
  name:"candles",
  type:"home",
  quantity:3,
  price:1.99
},
{ 
  name:"cheesecake",
  type:"food",
  quantity:1,
  price:4.99
},
{ 
  name:"onions",
  type:"food",
  quantity:3,
  price:.4
}];

function getTotalPrice(arrShoppingCart = [], objCoupon = {}){
  let total = 0;
  let itemPrice = 0;

  for(var counter = 0; counter < arrShoppingCart.length; counter++) {
    var objItem = arrShoppingCart[counter];
    //console.log(objItem);
    itemPrice = parseFloat(objItem.quantity) * parseFloat(objItem.price);
    //console.log(objItem);
    if(objCoupon && objCoupon.type == 'percentage'){
      if(objCoupon.category == objItem.type || objCoupon.category == 'all') {
        itemPrice = (itemPrice / 100) * (100 - objCoupon.value);
      // console.log(itemPrice);
      } 
    }
    total = total + itemPrice;
    // console.log(total);
  }
  if(objCoupon && objCoupon.type == 'total'){
  total = total - objCoupon.value;
  }
  return total.toFixed(2);
}

let objCoupon = {
  name: '20 Percent Off',
  value: 20,
  category: 'all',
  type: 'percentage'
};

let cartTotal = getTotalPrice(arrShoppingCart, objCoupon);
console.log(cartTotal);