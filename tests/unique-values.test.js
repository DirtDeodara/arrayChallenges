const { uniqueValues } = require('../lib/unique-values');

describe('unique values tests', () => {
  it('returns an array without duplictes', () => {
    const arr = [1, 2, 3, 3];
    const uniqueVals = uniqueValues(arr);
    expect(uniqueVals).toEqual([1, 2, 3]);
  });
});