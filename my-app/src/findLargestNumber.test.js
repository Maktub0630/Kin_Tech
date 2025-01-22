import findLargestNumber from './findLargestNumber';

test('finds the largest number in an array', () => {
    expect(findLargestNumber([3, 7, 2, 9, 5])).toBe(9);
});