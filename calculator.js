const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  let sum = 0;
	for(let element of array) {
    sum += element;
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
	for(let element of array) {
    product = product * element;
  }
  return product;
};

const power = function(base, exponent) {
  let result = base;
	for(let i = 1; i < exponent; i++) {
    result = result * base;
  }
  return result;
};

const factorial = function(x) {
	if (x === 0) {
    return 1;
  }
  else {
    let result = 1;
    for (let i = x; i > 0; i--) {
      result = result * i;
      console.log(result)
    }
    return result;
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
