import card from '../../code/array/lesson2'

test('card', () => {
  expect(card([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true)
})

test('card', () => {
  expect(card([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false)
})
