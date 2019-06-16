import disMax from '../../code/sort/lesson3'

test('disMax', () => {
  expect(disMax([3, 6, 9, 1])).toBe(3)
  expect(disMax([10])).toBe(0)
  expect(disMax([13, 16, 19, 1])).toBe(12)
})
