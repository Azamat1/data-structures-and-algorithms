import _ from 'lodash';
import {HuffmanTreeBuilder, getSymbolsFrequencyTable} from './index';

describe('Huffman tree ', () => {
    test('FrequencyTable should return correct symbol frequency table', () => {
        const message = 'Hello!'
        const symbolsFrequencyTable = new Map([['H', 1], ['e', 1], ['l', 2], ['o', 1], ['!', 1]])
        expect(_.isEqual(symbolsFrequencyTable, getSymbolsFrequencyTable(message))).toBeTruthy()
    })

    test('should contain 1 tree of symbol nodes', () => {
        const huffmanTree = new HuffmanTreeBuilder('Hello!').huffmanTree;
        expect(huffmanTree.root.id).toBe(6);
        expect(huffmanTree.root.leftChild.id).toBe(4);
        expect(huffmanTree.root.rightChild.id).toBe(2);
        expect(huffmanTree.root.rightChild.data).toBe('l');
        // root - left child - left child
        expect(huffmanTree.root.leftChild.leftChild.id).toBe(2);
        expect(huffmanTree.root.leftChild.leftChild.data).toBe(null);
        // root - left child - left child - left child
        expect(huffmanTree.root.leftChild.leftChild.leftChild.id).toBe(1);
        expect(huffmanTree.root.leftChild.leftChild.leftChild.data).toBe('o');
        // root - left child - left child - right child
        expect(huffmanTree.root.leftChild.leftChild.rightChild.id).toBe(1);
        expect(huffmanTree.root.leftChild.leftChild.rightChild.data).toBe('!');
        // root - left child - right child - left child
        expect(huffmanTree.root.leftChild.rightChild.leftChild.id).toBe(1);
        expect(huffmanTree.root.leftChild.rightChild.leftChild.data).toBe('H');
        // root - left child - right child - right child
        expect(huffmanTree.root.leftChild.rightChild.rightChild.id).toBe(1);
        expect(huffmanTree.root.leftChild.rightChild.rightChild.data).toBe('e');
    })
})