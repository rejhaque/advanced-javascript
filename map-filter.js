const numbers = [1, 2, 4, 7, 8, 6]
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//      const element = numbers[i];
//      const result = element * element;
//      output.push(result);
// }

// function square (element){
//      return element * element;
// }
// const square = elenment => elenment * elenment;
// const square = x => x * x;

// numbers.map(function()); 

// console.log(output);

// const result = numbers.map(x => x * x);


const bigger = numbers.filter(x => x > 5);
const isThere = numbers.find(x => x > 5);
// console.log(bigger);
console.log(isThere);
