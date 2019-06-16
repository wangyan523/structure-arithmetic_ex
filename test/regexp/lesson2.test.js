import regModeStr from '../../code/regexp/lesson2'

test('regModeStr', () => {
  expect(regModeStr('aa', 'a')).toBe(false)
  expect(regModeStr('aa', 'a*')).toBe(true)
  expect(regModeStr('aab', 'c*a*b')).toBe(true)
})
