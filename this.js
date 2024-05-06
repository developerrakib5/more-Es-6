class person {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    sleep (){
        console.log(`Sleeping Now ${this.name}`);
    }
    activity (){
        this.sleep();
    }
}

const kodom = new person ('Kodom Ali', 21);
console.log(kodom);
kodom.sleep();
const badam = new person ('Tamim Iqbal',23);
badam.sleep();

// Bejhal 
const lazy = kodom.sleep();
console.log(lazy);
