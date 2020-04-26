import {Link} from '../LinkedList'

export class PriorityQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    insert(key, data) {
        const newLink = new Link(key, data);
        let previous = null;
        let current = this.first;

        while(current != null && key > current.key) {
            previous = current;
            current = current.next;
        }
        if (previous == null) {
            if (current !== null) {
                current.previous = newLink;
            } else {
                this.last = newLink;
            }
            this.first = newLink;
        }
        else {
            previous.next = newLink;
            if (current == null) {
                this.last.next = newLink;
                newLink.previous = this.last;
                this.last = newLink;
            }
            else if (newLink.key < current.key) {
                previous.next = newLink;
                newLink.previous = previous;
                current.previous = newLink;
            }
                
        }
        newLink.next = current;
        this.length += 1;
    }

    dequeueMax() {
        const temp = this.last;
        if (this.last == this.first) {
            this.last = null;
            this.first = null;
        } else {
            temp.previous.next = null;
            this.last = temp.previous;
        }
        if (temp !== null)
            this.length -= 1;
        return temp;
    }

    dequeueMin() {
        const temp = this.first;
        if (this.last == this.first) {
            this.last = null;
            this.first = null;
        } else {
            temp.next.previous = null;
            this.first = temp.next;
        }
        if (temp !== null)
            this.length -= 1;
        return temp;
    }

    isEmpty() {
        return this.first == null;
    }

    toString() {
        let strBuffer = 'Priority queue ';
        if (this.isEmpty)
            return strBuffer + '{ empty }';

        let current = this.first;
        strBuffer += '{ ';
        while(current != null) {
            strBuffer = `${strBuffer}[${current.key},${current.data}], `;
        }
        return strBuffer.substring(0, strBuffer.length - 1) + '}';
    }
}

