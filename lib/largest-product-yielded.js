const arr = [-10, 7, 29, 30, 5, -10, -70];

const largestProductFunc = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);
  
 
  return sortedArray;
};

largestProductFunc(arr);
module.exports = largestProductFunc;
