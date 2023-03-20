
function sumFibs (num) {
  let fibonacci = [0, 1];
  for (let i = 0; i < num; i++){
    let len = fibonacci.length;
    fibonacci.push(fibonacci[len - 2] + fibonacci
    [len - 1]);
    if(fibonacci[len - 2] + fibonacci[len - 1] >
    num) break
  }
  return fibonacci.filter(n => n <= num) .filter(n => n % 2 !== 0)
.reduce((sum, i) => sum + i);
};

console.log(sumFibs (75025));
