import {LinkedList} from './index'


describe('Linked list should ', () => {
    test('be empty after creation', () => {
        const list = new LinkedList()
        expect(list.isEmpty()).toBeTruthy()
        expect(list.first).toBe(null)
        expect(list.last).toBe(null)
    })

    test('has 1 link as first and last member', () => {
        const list = new LinkedList()
        list.insertFirst(12)

        expect(list.isEmpty()).toBeFalsy()
        expect(list.first.key).toBe(12)
        expect(list.last.key).toBe(12)
    })

    test('delete second link', () => {
        const list = new LinkedList()
        list.insertFirst(12)
        list.insertLast(34)

        expect(list.first.key).toBe(12)
        expect(list.last.key).toBe(34)
        list.deleteFirst()
        expect(list.first.key).toBe(34)
        expect(list.last.key).toBe(34)
    })
})