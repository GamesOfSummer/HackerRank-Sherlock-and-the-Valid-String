import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function exists(arr, search) {
    return arr.some((row) => row.includes(search));
}

function isValid(s: string): string {
    let stringArray = s.split('');
    let resultsArray = [];

    for (let i = 0; i < stringArray.length + 1; i++) {
        let holder = resultsArray.find((x) => x.key === stringArray[i]);

        if (!holder) {
            resultsArray.push({ key: stringArray[i], count: 1 });
        } else {
            holder.count = holder.count + 1;
        }
    }

    const holder2 = resultsArray;

    let lastValue = 0;
    let brokenOrder = 0;
    for (let i = 0; i < resultsArray.length; i++) {
        if (
            resultsArray[i + 1] &&
            resultsArray[i].count !== resultsArray[i + 1].count
        ) {
            i++;
            brokenOrder++;
        }
    }
    const holder3 = brokenOrder;
    return brokenOrder > 1 ? 'YES' : 'NO';
}

consoleStart();

validateFxn(isValid('aabbcd'), 'NO');
validateFxn(isValid('abcdefghhgfedecba'), 'YES');

consoleEnd();
consoleBuffer();

export {};
