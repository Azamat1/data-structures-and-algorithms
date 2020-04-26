export class Link {
    constructor(key, data) {
        this.key = key;
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    displayLink() {
        console.log('Link {' + data + '}')
    }
}