import quickSort from '../../code/sort/lesson5'

test('quickSort', () => {
  expect(quickSort([1, 2, 0])).toEqual([0, 1, 2])
  expect(quickSort([1, 2, 0, 3, 5, 4, 7, 6])).toEqual([0, 1, 2, 3, 4, 5, 6, 7])
})
