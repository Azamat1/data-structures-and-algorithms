import {PriorityQueue} from './index'

describe('Priority queue should ', () => {
    test('be sorted', () => {
        const queue = new PriorityQueue()
        queue.insert(3)
        queue.insert(1)
        queue.insert(2)
        expect(queue.dequeueMax().key).toBe(3)
        expect(queue.dequeueMin().key).toBe(1)
        expect(queue.dequeueMax().key).toBe(2)
    })
})