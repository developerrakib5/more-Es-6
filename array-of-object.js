const products = [
    {id:1, name:'lenovo', price:65000},
    {id:1, name:'Dell', price:45000},
    {id:1, name:'Hp', price:40000},
    {id:1, name:'Mac', price:140000},

]

// Map
const names = products.map (product => product.name);
console.log(names);
const prices = products.map (p => p.price);
console.log(prices);

// forEach
products.forEach (p => console.log(p.id));

// Filter
const expensive = products.filter (p => p.price>50000);
console.log(expensive);

// Find 
const experience = products.find(p => p.price> 50000);
console.log(experience);

// Reduce 
const reduce = products.reduce((accum,current) => accum + current.price , 0 );
console.log(reduce);