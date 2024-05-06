// Data Access
const data = [{id:1, name: 'Abul', address: 'Kochu Khet'}]
console.log(data[0].address);

const products = {
    count : 5000,
    data  : [
        {
            id : 1,
            Name: 'Lenovo Laptop',
            Price: 6500,
            
        },
        {
            id : 2,
            Name: 'Mackbook',
            Price: 106500,

        }
    ]

}

// !Second Product Price 
console.log(products.data[1].Price);


//! Step: - 02
const user = {
    id : 5001,
    name : 'Shoriful Raj',
    address :{
        street: {
            first : '54/1 Uttora, Dhaka',
            second : 'Poribag er goli',
            third : 'No, Dorai',
        },
        city : 'Dhaka',

    }

}
 console.log(user.address.street.second);  
 console.log(user.address.city);  

 const user2 = {
    id : 5002,
    name : 'Pori bibir Majar',
    address : {
        city : 'Chittagong',
        Country : 'Bangladesh',
    }
 }
 console.log(user2.address.city);