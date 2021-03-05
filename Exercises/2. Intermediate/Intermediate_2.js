/*
 * Please identify the any issue(s) with the following code. There may be
 * syntax or style errors.
 */
const middleEarth = {
  1: {
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien',
  },
  2: {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
  },
  3: {
    title: 'The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
  },
  4: {
    title: 'The Two Towers',
    author: 'J.R.R. Tolkien',
  },
  5: {
    title: 'The Return of the King',
    author: 'J.R.R. Tolkien',
  },
};

for (let book in middleEarth) {
  console.log(middleEarth.book);
}
console.log(middleEarth[5].author);

/** SOLUTION
 * Here we have the TypeError: Cannot read property 'property' of undefined
 *
 * If we look at the way we access the properties of an the middle earth object. You will see that our initial approach is attempting to
 * access the property one level above what it should be. We first have to interate the numbered keys of the object. Next we can use dot
 * notation to access book. So the book for the for in loop in this case represents the numbered keys.
 */

const middleEarth = {
  1: {
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien',
  },
  2: {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
  },
  3: {
    title: 'The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
  },
  4: {
    title: 'The Two Towers',
    author: 'J.R.R. Tolkien',
  },
  5: {
    title: 'The Return of the King',
    author: 'J.R.R. Tolkien',
  },
};

for (let book in middleEarth) {
  console.log(middleEarth[book].author);
}
// console.log(middleEarth[5].author);
