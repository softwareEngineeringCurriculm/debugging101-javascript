const fibbonaci = n => {
  if (n === 0) return 1;

  return fibbonaci(n-1) + fibbonaci(n-2);
}

console.log(fibbonaci(20));