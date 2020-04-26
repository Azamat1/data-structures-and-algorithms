import {Link} from './Link'

export class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }

    isEmpty() {
        return this.first == null;
    }

    insertFirst(key, data) {
        const newLink = new Link(key, data);
        if (this.isEmpty())
            this.last = newLink;
        newLink.next = this.first;
        this.first = newLink;
    }

    insertLast(key, data) {
        const newLink = new Link(key, data);
        if (this.isEmpty())
            this.first = newLink;
        else
            this.last.next = newLink;
        this.last = newLink;
    }

    deleteFirst() {
        const temp = this.first;
        if (this.first.next == null)
            this.last = null;
        this.first = this.first.next;
        return temp;
    }

    displayList() {
        console.log('List (first-->last): ');
        let current = this.first;
        while(current != null) {
            current.displayLink();
            current = current.next;
        }
        console.log('');
    }

}