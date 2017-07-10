let prices = [0.99, 12.99, 3.99, 0.30, 2.99, 0.49, 0.35, 13.49];


//1.Log all of the prices
for(let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}

//2. Find the lowest price
let lowest = prices[0];
for(let i = 0; i < prices.length; i++) {
  if(prices[i] < lowest) {
    lowest = prices[i];
  }
}
console.log('lowest', lowest);



//3. Find the highest price.
let highest =  prices[0];
for(let i = 0; i < prices.length; i++) {
  if (prices[i] > highest) {
    highest = prices[i];
  }
}
console.log('highest', highest);

//4. Get all prices less than 10 and put them in a new array
let lessThanTen = [];
for(let i = 0; i < prices.length; i++) {
  if ( prices[i] < 10) {
    lessThanTen.push( prices[i]);
  }
}
console.log('lessThanTen', lessThanTen);


//5. Get all prices equal to or more than 10 and put them in a new array.
let moreThanTen =[];
for(let i = 0; i < prices.length; i++) {
  if ( prices[i] >= 10) {
    moreThanTen.push(prices[i]);
  }
}
console.log('moreThanTen', moreThanTen);

//6. Compute the sum of the prices.
var sum = 0;
for(let i = 0; i < prices.length; i++) {
  sum += prices[i];
}
console.log('sum', sum);

//7. Compute the average price.
let average = sum / prices.length;
console.log('average', average);



//The same prices...but this time in objects!

var items = [
  {
    name: 'Dr Pepper',
    price: 0.99
  },
  {
    name: 'Ribeye (1 lb)',
    price: 12.99
  },
  {
    name: 'Lay\'s',
    price: 3.99
  },
  {
    name: 'Cup o\' Noodles',
    price: 0.30
  },
  {
    name: 'Tums',
    price: 2.99
  },
  {
    name: 'Bananas',
    price: 0.49
  },
  {
    name: 'Apple',
    price: 0.35
  },
  {
    name: 'Wine (mediocre)',
    price: 13.49
  }
]

//8. Log all of the prices
for(let i = 0; i < items.length; i++) {
  console.log(items[i].price);
}


//9. Find the lowest price
let low = items[0].price;
for(let i = 0; i < items.length; i++) {
  if(items[i].price < low) {
    low = items[i].price;
  }
}
console.log('low', low);
//10. Find the highest price.
let high = items[0].price;
for(let i = 0; i < items.length; i++) {
  if(items[i].price > high) {
    high = items[i].price;
  }
}
console.log('high', high);

//11. Get all prices less than 10 and put them in a new array.
let tenLessThan= [];
for(let i = 0; i < items.length; i++) {
  if ( items[i].price < 10) {
    tenLessThan.push( items[i].price);
  }
}
console.log('tenLessThan', tenLessThan);
//12. Get all prices equal to or more than 10 and put them in a new array.
let tenMoreThan = [];
for(let i = 0; i < items.length; i++) {
  if ( items[i].price >= 10) {
    tenMoreThan.push( items[i].price);
  }
}
console.log('tenMoreThan', tenMoreThan);

//13. Compute the sum of the prices.
var sum = 0;
for(let i = 0; i < items.length; i++) {
  sum += items[i].price;
}
console.log('sum', sum);

//14. Compute the average price.
let average = sum / items.length;
console.log('average', average);
