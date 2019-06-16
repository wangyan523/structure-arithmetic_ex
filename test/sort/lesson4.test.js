import sortPrivite from '../../code/sort/lesson4'

test('sortPrivite', () => {
  expect(sortPrivite([1, 2, 0])).toBe(3)
  expect(sortPrivite([3, 4, -1, 1])).toBe(2)
  expect(sortPrivite([1, 2, 3, 4, 5])).toBe(6)
})
