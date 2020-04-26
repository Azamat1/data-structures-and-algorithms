import {Tree} from './BinaryTree'

class TreeApp {

    constructor() {

    }

    async main() {
        try {
            let tree = new Tree();
            tree.insert(50, 1.5);
            tree.insert(25, 1.2);
            tree.insert(75, 1.7);
            tree.insert(12, 1.5);
            tree.insert(37, 1.2);
            tree.insert(43, 1.7);
            tree.insert(30, 1.5);
            tree.insert(33, 1.2);
            tree.insert(87, 1.7);
            tree.insert(93, 1.5);
            tree.insert(97, 1.5);
            console.log('tree', tree);
            for(let i = 0; i < 2; i++) {
                console.log('Enter first letter of show. ');
                console.log('insert. find. delete. or traverse: ');
                let choice = await this.getString();
                let value;
                switch (choice[0]) {
                    case 's':
                        tree.displayTree();
                        break;
                    case 'i':
                        console.log('Enter value to insert: ');
                        value = Number(await this.getString());
                        tree.insert(value, value + 0.9);
                        break;
                    case 'f':
                        console.log('Enter value to insert: ');
                        value = Number(await this.getString());
                        let found = tree.find(value);
                        if (found != null) {
                            console.log('found: ');
                            found.displayNode();
                            console.log('\n');
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        catch (er) {
            console.log(er);
        }
    }

    getString() {
        return 's';
    }
}