/* Identify the issue in the following code.*/
const javaScriptWorkshops;
javaScriptWorkshops = [
  'JavaScript 101',
  'JavaScript 201',
  'JavaScript 301',
  'JavaScript 401',
  'Thinking Like a Software Engineer Part 1',
];

/* Solution
 * There is a single error with the above problem. Here we
 * have an example of a TypeError: Assignment to constant
 * variable.
 *
 * In Javascript, we are not allowed to reassign constant
 * values after their initialization. We have to set the
 * values of const at initialization. The other fix is to
 * initialize the above variable as an empty erray and push
 * the contents to that empty array. The other approach is to
 * use let instead of const.
 *
 */
// Solution1:
const javaScriptWorkshops = [
  'JavaScript 101',
  'JavaScript 201',
  'JavaScript 301',
  'JavaScript 401',
  'Thinking Like a Software Engineer Part 1',
];

// Solution2:
let javaScriptWorkshops;
javaScriptWorkshops = [
  'JavaScript 101',
  'JavaScript 201',
  'JavaScript 301',
  'JavaScript 401',
  'Thinking Like a Software Engineer Part 1',
];

// Solution3:
const javaScriptWorkshops = [];
javaScriptWorkshops.push(
  'JavaScript 101',
  'JavaScript 201',
  'JavaScript 301',
  'JavaScript 401',
  'Thinking Like a Software Engineer Part 1'
);
