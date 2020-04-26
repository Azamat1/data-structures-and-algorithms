import {Node} from './Node'

export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    find(key) {
        let current = this.root;
        while(current.id != key) {
            if (key < current.id)
                current = current.leftChild;
            else
                current = current.rightChild;
            if (current == null)
                return null;
        }
        return current;
    }

    insert(id, data) {
        let newNode = new Node();
        newNode.id = id;
        newNode.data = data;

        if (this.root == null)
            this.root = newNode;
        else {
            let current = this.root;
            let parent = null;
            while(true) {
                parent = current;
                if (id < current.id) {
                    current = current.leftChild;
                    if (current == null) {
                        parent.leftChild = newNode;
                        return;
                    }
                } else {
                    current = current.rightChild;
                    if (current == null) {
                        parent.rightChild = newNode;
                        return;
                    }
                }
            }
        }
    }

    delete(key) {
        let current = this.root;
        let parent = this.root;
        let isLeftChild = true;

        while(current.id != key) {
            parent = current;
            if (key < current.id) {
                isLeftChild = true;
                current = current.leftChild;
            } else {
                isLeftChild = false;
                current = current.rightChild;
            }
            if (current == null) {
                return false;
            }
        }

        if (current.leftChild == null && current.rightChild == null) {
            if (current == this.root)
                this.root = null;
            else if (isLeftChild)
                parent.leftChild = null;
            else
                parent.rightChild = null;
        }
        else if (current.rightChild == null) {
            if (current == this.root)
                this.root = current.leftChild;
            else if (isLeftChild)
                parent.leftChild = current.leftChild;
            else
                parent.rightChild = current.leftChild;
        }
        else if (current.leftChild == null) {
            if (current == this.root)
                root = current.rightChild;
            else if (isLeftChild)
                parent.leftChild = current.rightChild;
            else
                parent.rightChild = current.rightChild;
        }
        else {
            let successor = getSuccessor(current);

            if (current == this.root)
                this.root = successor;
            else if (isLeftChild)
                parent.leftChild = successor;
            else
                parent.rightChild = successor;
            
            return true;
        }
    }

    getSuccessor(node) {
        let successorParent = node;
        let successor = node;
        let current = node.rightChild;
        while(current != null) {
            successorParent = successor;
            successor = current;
            current = current.leftChild;
        }

        if (successor != node.rightChild) {
            successorParent.leftChild = successor.rightChild;
            successor.rightChild = node.rightChild;
        }
        return successor;
    }

    traverse(traverseType) {
        switch(traverseType) {
            case 1: console.log('\nPreorder traversal: ');
                    preOrder(this.root);
                    break;
            case 2: console.log('\nInorder traversal: ');
                    inOrder(this.root);
                    break;
            case 3: console.log('\nPostorder traversal: ');
                    postOrder(this.root);
                    break;
        }
        console.log('');
    }

    preOrder(localRoot) {
        if (localRoot != null) {
            console.log(localRoot.data + ' ');
            this.preOrder(localRoot.leftChild);
            this.preOrder(localRoot.rightChild);
        }
    }

    inOrder(localRoot) {
        if (localRoot != null) {
            this.inOrder(localRoot.leftChild);
            console.log(localRoot.data + ' ');
            this.inOrder(localRoot.rightChild);
        }
    }

    postOrder(localRoot) {
        if (localRoot != null) {
            this.postOrder(localRoot.leftChild);
            this.postOrder(localRoot.rightChild);
            console.log(localRoot.data + ' ');
        }
    }

    displayTree() {
        let globalStack = [];
        globalStack.push(this.root);
        let nBlanks = 32;
        let isRowEmpty = false;
        console.log('....................................');

        while (isRowEmpty == false) {
            let localStack = [];
            isRowEmpty = true;
            let outStr = '';
            for (let j = 0; j < nBlanks; j++) {
                outStr += ' ';
            }

            while (globalStack.length > 0) {
                let temp = globalStack.pop();
                if (temp != null) {
                    outStr += temp.id;
                    localStack.push(temp.leftChild);
                    localStack.push(temp.rightChild);

                    if (temp.leftChild != null || temp.rightChild != null)
                        isRowEmpty = false;
                } else {
                    outStr += '---';
                    localStack.push(null);
                    localStack.push(null);
                }

                for (let i = 0; i < (nBlanks * 2 - 2); i++) {
                    outStr += ' ';
                }
            }
            console.log(outStr + '\n');
            nBlanks = Math.trunc(nBlanks / 2);
            while (localStack.length > 0) {
                globalStack.push(localStack.pop());
            }
        }
        console.log('....................................');
    }
}
