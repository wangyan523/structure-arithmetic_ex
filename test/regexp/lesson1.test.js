import subLoopStr from '../../code/regexp/lesson1'

test('subLoopStr:abab', () => {
  expect(subLoopStr('abab')).toBe(true)
})

test('subLoopStr:ababa', () => {
  expect(subLoopStr('ababa')).toBe(false)
})
