// const nums = [1,2,3,4,5,6,7,8,9];
// for (let i = 0; i < nums.length; i++) {
//      const output = nums[i];
//      if(output>5){
//           break;
//      }
//      console.log(output);
// }
const nums = [1,2,-3,4,-5,-6,7,8,9];
for (let i = 0; i < nums.length; i++) {
     const output = nums[i];
     if(output<0){
          continue;
     }
     console.log(output);
}