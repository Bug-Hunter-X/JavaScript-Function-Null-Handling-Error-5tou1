function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This will cause an error if a and b are both null
  }
  return a + b;
}

console.log(foo(null, null)); //This will output 0 instead of an error