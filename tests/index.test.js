const multiplier = require('../lib/index')

describe('array tests', () => {
  it('tests that function muliplies num by 5 until 100 is reached', () => {
    const num = 5;
    expect(multiplier(num)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
  });

  
});
