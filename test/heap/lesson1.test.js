import Heap from '../../code/heap/lesson1'

test('Heap:1', () => {
  let heap = new Heap('chcaa')
  expect(heap.toString()).toMatch(/ccaah|aacch/)
})
