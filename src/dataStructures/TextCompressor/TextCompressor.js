import {HuffmanTreeBuilder} from '../HuffmanTree';

// Huffman text compressor
export class TextCompressor {
    constructor(text) {
        this._huffmanTree = new HuffmanTreeBuilder(text).huffmanTree;
        this._codeTable = this.generateCodeTable(this._huffmanTree.root);
        this._compressedText = this.compressToBinary(text);
    }

    get huffmanTree() {
        return this._huffmanTree;
    }

    get codeTable() {
        return this._codeTable;
    }

    get compressedText() {
        return this._compressedText;
    }

    // #compressToBinary - приватный метод
    compressToBinary(text) {
        let result = '';
        for (let char of text) {
            result += this._codeTable[char];
        }
        return result;
    }

    decodeText(binaryText) {
        let result = '';
        let current = this._huffmanTree.root;
        for (let bit of binaryText) {
            current = bit === '0' ? current.leftChild : current.rightChild;
            if (current.data !== null) {
                result += current.data;
                current = this._huffmanTree.root;
            }
        }
        return result;
    }

    // #generateCodeTable - приватный метод
    generateCodeTable(localRoot, code = '') {
        if (localRoot == null) {
            return null;
        }
        let result = {};
        const leftChild = this.generateCodeTable(localRoot.leftChild, code + '0');
        const rightChild = this.generateCodeTable(localRoot.rightChild, code + '1');
        if (leftChild)
            result = {...result, ...leftChild};
        if (rightChild)
            result = {...result, ...rightChild};
        if (!leftChild && !rightChild)
            result = {[localRoot.data]: code}; 
        return result;
    }
}