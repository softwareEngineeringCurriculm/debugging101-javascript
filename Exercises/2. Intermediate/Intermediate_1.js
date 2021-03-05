/*
* The following code leverages a middleEarth object that 
* contains 5 books from * the works of Tolkien. 
* Please identify and write a fix for one or more issues 
* present.
*/

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

/** Solution
 * Here we have a Syntax Error: Unexpected token
 * 
 * This type of error is common when we forget a symbol. In 
 * this case, we forget to put a comma between title and 
 * author properties for book number 4.
 * 
 * We also have a second error for property 2 where there is
 * an extra semicolon for the author property. 
 */


const middleEarth = {
  1: {
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien'
  },
  2: {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
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
    authors: 'J.R.R. Tolkien'
  }
}

console.log(middleEarth);

for(let book in middleEarth) {
  middleEarth[book].author = 'Tolkien'
}
console.log(middleEarth[5].author);