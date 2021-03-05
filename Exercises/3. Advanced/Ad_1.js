/*
 * Identify the issues in the following function. Fibbonaci is a series of
 * numbers where a number is the addition of the last two numbers starting with * 0 and 1.
 * The Fibbonaci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
 * Please note Fib{0} = 0, Fib{1} = 1. Fib{20} = 6765. Fib{40} = 102334155
 *
 * HINT: The following algorithm
 * requires some type of optimization to fix the issue.
 */

const fibonacci = (n) => {
  if (n === 0) return 1;
  // if (n === 0) return 0;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(20));
// console.log(fibonacci(40));

/** SOLUTION
 * Here we have Uncaught RangeError: Maximum call stack size exceeded.
 *
 * This error is very common for recursive functions or any logic that uses recursion. The reason this error exist is because the computer has ran out of maximum call stack memory. As the function calls itself n times, if the function call exceeds the stack memory limit then it will error out before all the calls resolve.
 *
 * The other potential bug with recursion is if the exiting condition/logic is incorrect so the function calls itself infinitely.
 *
 * For this example, the issues are the exiting condition is wrong. fibonacci{0} does not equal 1.
 */

const memofibonacci = (num, memo) => {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = memofibonacci(num - 1, memo) + memofibonacci(num - 2, memo));
};

console.log(memofibonacci(0));
console.log(memofibonacci(1));
console.log(memofibonacci(20));
console.log(memofibonacci(40));
