const { largestProductFunc, largestProductFunc2 } = require('../lib/largest-product-yielded')

describe('Largest Product Yielded test', () => {
  it('tests that a  function given an array of integers returns a sorted array', () => {
    const arr = [-10, 7, 29, 30, 5, -10, -70];
    expect(largestProductFunc(arr)).toEqual([-70, -10, -10, 5, 7, 29, 30]);
  });

  it('tests that a  function given an array of integers, finds the largest product yielded from three of the integers', () => {
    const arr = [-10, 7, 29, 30, 5, -10, -70];
    expect(largestProductFunc2(arr)).toEqual(6090);
  });
});
