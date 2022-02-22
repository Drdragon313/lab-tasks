var a="1,2,3,4,5,6"
var b = a.split(',').map(Number);
const even = b.filter(number => {
    return number % 2 == 0;
  });
console.log(b)
  console.log(even.reduce((a, b) => a + b,0))