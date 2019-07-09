
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

const largestProductFunc3 = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);
  if(sortedArray[0] < 0 && sortedArray[1] < 0) {
    let sum = sortedArray[0] * sortedArray[1] * sortedArray[sortedArray.length - 1];
    return sum;
  } else {
    let sum = sortedArray[sortedArray.length - 1] * sortedArray[sortedArray.length - 2] * sortedArray[sortedArray.length - 3];
    return sum;
  }
};


module.exports = { largestProductFunc, largestProductFunc2, largestProductFunc3 };




