import {getSymbolsFrequencyTable} from './utils'
import {PriorityQueue} from '../Queue'
import {HuffmanTree} from './HuffmanTree'

export class HuffmanTreeBuilder {
    constructor(text) {
        this._huffmanTree = null;
        const symbolsTable = getSymbolsFrequencyTable(text);
        const priorTreeQueue = new PriorityQueue();

        symbolsTable.forEach((frequency, symbol) => {
            const tree = new HuffmanTree();
            tree.insert(frequency, symbol);
            priorTreeQueue.insert(tree.root.id, tree);
        })

        while(priorTreeQueue.length !== 1) {
            const firstTree = priorTreeQueue.dequeueMin().data;
            const secondTree = priorTreeQueue.dequeueMin().data;
            firstTree.insertNode(secondTree.root);
            priorTreeQueue.insert(firstTree.root.id, firstTree);
        }
        this._huffmanTree = priorTreeQueue.dequeueMin().data;
    }

    get huffmanTree() {
        return this._huffmanTree;
    }
}