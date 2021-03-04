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