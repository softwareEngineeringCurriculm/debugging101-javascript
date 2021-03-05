/*
 * The following problem sums up an array of numbers and returns a total. Please identify any style or errors with this code.
 */
const sumNum = (nums) => {
  let total = 0;
  for (let i = 0; i < nums.length; i += 1) {
    total += nums[i];
    return total;
  }
};

console.log([1, 100, 200, 400, 201]); // Expect total to be 902

/* SOLUTION
 * The problem contains two types of errors style and logical * fallacy error.
 *
 * Take a look at the expressions inside the for loop.
 * Generally speaking when we return something in JS, it will * stop the execution of the code after the first run. So our * buggy code will only run once and give us a total 1
 * instead of 902. Thus we would have to move the return
 * statement
 * outside the for loop
 *
 * The style error we face has to do with the for loop. Based
 * on current best practices we want to employ declarative
 * (what) programming rather than imperative(how) programming.
 */

const sumNum = (nums) => {
  let total = 0;
  nums.forEach((num) => {
    total += num;
  });
  return total;
};

console.log([1, 100, 200, 400, 201]);
