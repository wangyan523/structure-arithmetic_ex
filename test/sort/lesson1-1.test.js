import sort from '../../code/sort/lesson1-1'

test('冒泡排序', () => {
  expect(sort([1, 4, 2, 3, 5])).toEqual([1, 2, 3, 4, 5])
})
