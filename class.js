const products = [
    {id:1, name:'lenovo', price:65000},
    {id:1, name:'Dell', price:45000},
    {id:1, name:'Hp', price:40000},
    {id:1, name:'Mac', price:140000},

]

// Similar
class Product {
    contry = 'Bangladesh';
    constructor (name){
       this.name = name;
    }
    speak(talk){
       console.log(`Talking About ${talk}`);
    }
    
}

const lenovo = new Product ('Le le lenovo');
console.log(lenovo);
lenovo.speak('Oba kita kow');

class Teacher {
    constructor (name,subject){
       this.name = name;
       this.subject = subject;

    }
    lecture (){
        console.log('Sir is teaching math');
    }
}

const tapan = new Teacher ('Tapan Sir',"Physics");
console.log(tapan);
