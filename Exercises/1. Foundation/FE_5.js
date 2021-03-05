/*
* The following function multiplies all the numbers in together and returns 
* the total. Please identify any issues in the following function.
*/
const multiplyAllNums = nums => {
  let total = 0;
  for(num of nums) {
    total *= num;
  }
  return total;
}
console.log(multiplyAllNums([5, 4, 3, 2, 1])); // Expect: 120