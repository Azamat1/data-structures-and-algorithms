export function displayTree(tree) {
    let globalStack = [];
    globalStack.push(tree.root);
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