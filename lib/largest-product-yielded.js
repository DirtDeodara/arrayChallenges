const arr = [-10, 7, 29, 30, 5, -10, -70];

const largestProductFunc = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);
  
 
  return sortedArray;
};


const largestProductFunc2 = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);
  const length = sortedArray.length;
  const result = (sortedArray[length - 1 ] * sortedArray[length - 2] * sortedArray[length - 3]);
 
  return result;
};


module.exports = { largestProductFunc, largestProductFunc2 };




