function fibonacciRecursive(n) {
  if(n < 1) return 0;
  if(n <= 2) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciMemoization(n) {
  if (n < 1) return 0;
  const memo = [0, 1];
  const fibonacciMem = num => {
    if (memo[num] != null) return memo[num];
    return (memo[num] = fibonacciMem(num - 1) + fibonacciMem(num - 2));
  };
  const result = fibonacciMem(n)
  console.log(memo)
  return result;
}

console.log(fibonacciMemoization(5));