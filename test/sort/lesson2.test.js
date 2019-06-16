import kMaxSort from '../../code/sort/lesson2'

test('kMaxSort', () => {
  expect(kMaxSort([3, 2, 1, 5, 6, 4], 2)).toBe(5)
  expect(kMaxSort([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4)
})
