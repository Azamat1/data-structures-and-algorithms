import {Node} from './index'

describe('Binary tree node should', () => {
    let node;

    beforeEach(() => {
       node = new Node('1', 23243);
    })

    test('has id, data content', () => {
        expect(node.id).toBe('1');
        expect(node.data).toBe(23243);
    })

    test('has left child node', () => {
        const leftChildNode = new Node('2', 23243);
        node.leftChild = leftChildNode;
        expect(node.leftChild).not.toBe(null);
        expect(node.leftChild).toBe(leftChildNode);
    })
})