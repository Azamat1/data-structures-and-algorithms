export class Node {

    constructor(id, data, leftChild = null, rightChild = null) {
        this.id = id;
        this.data = data;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }

    displayNode() {
        console.log('{ key: ' + this.id + ', data: ' + this.data + ' }');
    }
}