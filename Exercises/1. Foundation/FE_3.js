/* Identify the bug in following code block. */
let count = 0;
for (let i = 0; i > 200; i += 1) {
  count = i;
  console.log('Hello');
}

/*
 * Infinite loop
 * Here is an example of an Infinite Loop where the code
 * will continue executing until your console/computer crashes
 *
 * We see that the starting condition is 100 and as each run * completes the counter increments up by 1. However the
 * stopping condition has no upper bounds and goes to
 * infinity.
 *
 * The fix for the above issue is to define an appropriate
 * stopping condition. So instead of the greater than
 * operator we use the less than equal sign. So that it will
 * stop at 200
 *
 */

let count = 0;
for (let i = 0; i <= 200; i += 1) {
  count = i;
  console.log('Hello');
}

console.log(count);
