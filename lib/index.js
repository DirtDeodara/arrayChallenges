
const multiplier = (num) => {
  const resultArr = [];
  for(let i = 1; i < (100 / num) + 1; i++) {
    resultArr.push(num * i);
  }
  return resultArr;
}

module.exports = multiplier;
