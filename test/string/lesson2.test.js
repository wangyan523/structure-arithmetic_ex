import matchNum from '../../code/string/lesson2'

test('matchNum(00110011)', () => {
  expect(matchNum('00110011')).toEqual([
    '0011',
    '01',
    '1100',
    '10',
    '0011',
    '01'
  ])
})
