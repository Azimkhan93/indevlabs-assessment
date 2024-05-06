const findMissing = require ('./assessment.js')

describe('find missing number', () => {

  test('missing number should be 4', () => {
    expect(findMissing([5,0,1,3,2])).toBe(4);
  });

  test('missing number should be 8', () => {
    expect(findMissing([7, 9,10, 11, 12])).toBe(8);
  });
  
  test('argument should be array', () => {
    expect(findMissing('a')).toBeUndefined();
    expect(findMissing(null)).toBeUndefined();
    expect(findMissing(undefined)).toBeUndefined();
    expect(findMissing(5)).toBeUndefined();
    expect(findMissing({a: 5, b:6})).toBeUndefined();
  });
  
  test('argument should be 0 or positive number', () => {
    expect(findMissing(['a','b', 'c'])).toBeUndefined();
    expect(findMissing([3,-4,5])).toBeUndefined();
  });

  test('array should contain more than 1 element', () => {
    expect(findMissing([1])).toBeUndefined();
  });

  test('no missing number', () => {
    expect(findMissing([1,2])).toBeUndefined();
  });
  
})