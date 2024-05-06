const numbers = [4,5,8,2,10];
// console.log(numbers);
const doubled = [];
for (const num of numbers){
    // console.log(numbers);
    const double = num * 2;
    doubled.push(double);

}
console.log(doubled);

// Javascript Map 
const numbers1 = [4,5,8,2,12];
function doubleIt (num){
    console.log('Num Now', num);
    return num*2;
}
const result = numbers1.map(doubleIt);
console.log(result);