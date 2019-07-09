

const uniqueValues = (arr) => {
  const unique = new Set(arr);
  const uniqueArr = [...unique];
  return uniqueArr;
};

module.exports = { uniqueValues };
