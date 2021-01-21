# Bug Search and Rescue
Note: Before getting started on these exercises, please be certain that you've read through the root README file in this repository.


## Exercises
--- 
For the following problems please classify the type of bug this problem may fall under in the following categories: 

* TypeError: Cannot read property 'property' of undefined
* TypeError: ‘null’ is Not an Object
* TypeError: Assignment to constant variable
* ReferenceError: Cannot access 'variable’ before initialization / Scope Error
* ReferenceError: 'variable' is not defined
* Uncaught RangeError: Maximum call stack size exceeded
* Infinite Loops
* Logical fallacy
* Style Error
* Syntax error

After identifying and classifying the appropriate type of bug, please write the fix in your IDE or repl.it/javascript for the buggy code.Please feel free to copy and paste the code into your IDE/Code editor. `NOTE!!!!: SOME code may contain more than one type of bug.` 

1. The following function sums all the numbers in an array and returns a total sum. Please identify the issue(s) with this function. 

```JavaScript
const sumNum = (nums) => {
  let total = 0; 
  for(let i = 0; i < nums.length; i += 1) {
    total += nums[i]; 
    return total;
  }
}
```

2. The following code leverages a middleEarth object that contains 5 books from the works of Tolkien. Please identify and write a fix for one or more issues present.

```JavaScript
const middleEarth = {
  1: {
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien'
  },
  2: {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien';
  },
  3: {
    title: 'The Fellowship of the Ring',
    author: 'J.R.R. Tolkien'
  },
  4: {
    title: 'The Two Towers'
    author: 'J.R.R. Tolkien'
  },
  5: {
    title: 'The Return of the King',
    authors: 'J.R.R. Tolkien'
  }
}

console.log(middleEarth);

for(let book in middleEarth) {
  middleEarth[book].author = 'Tolkien'
}
console.log(middleEarth[5].author);
```

3. Identify the issue in the following code. 
```JavaScript
const javaScriptWorkshops;
javaScriptWorkshops = ['JavaScript 101', 'JavaScript 201', 'JavaScript 301', 'JavaScript 401', 'Thinking Like a Software Engineer Part 1'];
```

4. Please identify the issue with the following code. 
```JavaScript
let total;
for(let i = 0; i < 10; i += 2) {
    total += i;
}
console.log(total);
```

5. Identify the issues in the following function. Fibbonaci is a series of numbers where a number is the addition of the last two numbers starting with 0 and 1.
The Fibbonaci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
Please note Fib{0} = 0 and Fib{1} = 1. HINT: The following algorithm requires some type of optimization to fix the issue.

```JavaScript
const fibbonaci = n => {
  if (n === 0) return 1;

  return fibbonaci(n-1) + fibbonaci(n-2);
}

console.log(fibbonaci(20));
```

6. Please identify the any issue(s) with the following code.
```JavaScript
const middleEarth = {
  1: {
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien'
  },
  2: {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  },
  3: {
    title: 'The Fellowship of the Ring',
    author: 'J.R.R. Tolkien'
  },
  4: {
    title: 'The Two Towers',
    author: 'J.R.R. Tolkien'
  },
  5: {
    title: 'The Return of the King',
    author: 'J.R.R. Tolkien'
  }
}

for(let book in middleEarth) {
  console.log(middleEarth.book);
}
console.log(middleEarth[5].author);
```

7. The following function multiplies all the numbers in together and returns the total. Please identify any issues in the following function.
```JavaScript
const multiplyAllNums = nums => {
  let total = 0;
  for(num of nums) {
    total *= num;
  }
  return total;
}

multiplyAllNums([5, 4, 3, 2, 1]); // Expect: 120
```
8. Identify the bug in following code block.
```JavaScript

```




