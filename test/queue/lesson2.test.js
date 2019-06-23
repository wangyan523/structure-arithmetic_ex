import least from '../../code/queue/lesson2'

test('least', () => {
  expect(least(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8)
})
