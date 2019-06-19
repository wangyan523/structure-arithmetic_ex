import recurip from '../../code/recur/lesson1'

test('recurip', () => {
  expect(recurip('25525511135')).toEqual(['255.255.11.135', '255.255.111.35'])
})
