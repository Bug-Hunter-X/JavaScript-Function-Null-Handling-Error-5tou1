function foo(a, b) {
  if (a === null && b === null) {
    throw new Error('Both parameters cannot be null');
  } else if (a === null || b === null) {
    return 0; // Handle the case where only one parameter is null
  }
  return a + b;
}

console.log(foo(null, null)); //Throws an error
console.log(foo(5, null)); //Outputs 0
console.log(foo(5, 10)); //Outputs 15