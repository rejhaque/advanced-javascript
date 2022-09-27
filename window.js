function add (num1, num2){
     var result = num1 + num2;
     function double(num){
          return num * 2;
     }
     var total = double(result);
     return total;
}
let sum = add(3, 89);
console.log(sum);
