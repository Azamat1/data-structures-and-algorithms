import {Tree} from './index.js'

describe('Binary tree should', () => {
    let binTree;

    beforeEach(() => {
        binTree = new Tree();
    })

    test('has no nodes after init', () => {
        expect(binTree.root).toBe(null);
    })

    test('has node after adding it', () => {
        binTree.insert('1', 23243);
        const root = binTree.find('1');
        expect(root).not.toBe(null);
        expect(root.id).toBe('1');
        expect(root.data).toBe(23243);
    })

    test('insert nodes in order', () => {
        binTree.insert(23, 23243);
        //left child tree
        binTree.insert(13, 23243);
        binTree.insert(7, 23243);
        binTree.insert(14, 23243);
        //right child tree
        binTree.insert(31, 23243);
        binTree.insert(25, 23243);
        binTree.insert(42, 23243);

        expect(binTree.root).toBe(binTree.find(23));
        //left child tree
        expect(binTree.root.leftChild).toBe(binTree.find(13));
        expect(binTree.root.leftChild.leftChild).toBe(binTree.find(7));
        expect(binTree.root.leftChild.rightChild).toBe(binTree.find(14));
        //right child tree
        expect(binTree.root.rightChild).toBe(binTree.find(31));
        expect(binTree.root.rightChild.leftChild).toBe(binTree.find(25));
        expect(binTree.root.rightChild.rightChild).toBe(binTree.find(42));
    })

    test('has no node that has been deleted', () => {
        binTree.insert(23, 23243);
        binTree.insert(13, 23243);
        binTree.insert(7, 23243);
        binTree.insert(14, 23243);

        binTree.delete(7);
        expect(binTree.find(7)).toBe(null);
        binTree.delete(13);
        expect(binTree.find(13)).toBe(null);
    })
})