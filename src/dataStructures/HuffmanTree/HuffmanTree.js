import {Node} from '../BinaryTree/Node'

export class HuffmanTree {
    constructor() {
        this._root = null;
    }

    get root() {
        return this._root;
    }

    insert(frequency, symbol) {
        const newNode = new Node(frequency, symbol);
        if (this._root == null)
            this._root = newNode;
        else {
            const totalFrequency = this._root.id + newNode.id;
            const newRootNode = new Node(totalFrequency, null);
            newRootNode.leftChild = newNode;
            newRootNode.rightChild = this._root;
            this._root = newRootNode;
        }
    }

    insertNode(node) {
        const totalFrequency = this._root.id + node.id;
        const newRootNode = new Node(totalFrequency, null);
        newRootNode.leftChild = node;
        newRootNode.rightChild = this._root;
        this._root = newRootNode;
    }

    toString() {
        return `HuffmanTree {${this._root.id}, ${this._root.data}}`
    }
}