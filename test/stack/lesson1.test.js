import stack from '../../code/stack/lesson1'

test('stack', () => {
  expect(stack(['5', '2', 'C', 'D', '+'])).toBe(30)
  expect(stack(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
})
