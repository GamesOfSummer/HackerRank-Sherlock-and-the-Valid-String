import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function isValid(s: string): string {
    let stringArray = s.split('');

    if (stringArray.length === 1) {
        return 'YES';
    }

    let resultsArray = [];

    for (let i = 0; i < stringArray.length; i++) {
        let holder = resultsArray.find((x) => x.key === stringArray[i]);

        if (!holder) {
            resultsArray.push({ key: stringArray[i], count: 1 });
        } else {
            holder.count = holder.count + 1;
        }
    }

    //****************** */
    // check for aabbccddeefghi
    let changedAmountsArray = [];
    for (let i = 0; i < resultsArray.length; i++) {
        let holder2 = changedAmountsArray.find(
            (x) => x.key === resultsArray[i].count
        );
        if (!holder2) {
            changedAmountsArray.push({ key: resultsArray[i].count, count: 1 });
        } else {
            holder2.count = holder2.count + 1;
        }
    }

    //********scan array */
    if (changedAmountsArray.length >= 3) {
        return 'NO';
    }

    if (changedAmountsArray.length >= 2) {
        if (
            changedAmountsArray[0].count > 1 &&
            changedAmountsArray[1].count > 1
        )
            return 'NO';

        if (changedAmountsArray[0].key > 1 && changedAmountsArray[1].count > 1)
            return 'NO';
    }

    //****************** */

    let lastValue = 0;
    let brokenOrder = 0;
    for (let i = 0; i < resultsArray.length; i++) {
        if (
            i === resultsArray.length &&
            resultsArray[i - 1].count !== resultsArray[i].count
        ) {
            brokenOrder++;
        }
        if (
            resultsArray[i + 1] &&
            resultsArray[i].count !== resultsArray[i + 1].count
        ) {
            i++;
            brokenOrder++;
        }
    }

    const holder3 = brokenOrder;
    return brokenOrder <= 1 ? 'YES' : 'NO';
}

consoleStart();

validateFxn(isValid('aaaaabc'), 'NO');
validateFxn(isValid('abcdefghhgfedecba'), 'YES');

validateFxn(isValid('abbccc'), 'NO');
validateFxn(isValid('aabbccddeefghi'), 'NO');
validateFxn(isValid('aabbcd'), 'NO');

validateFxn(isValid('aac'), 'YES');
validateFxn(isValid('aabbc'), 'YES');

validateFxn(isValid('a'), 'YES');

consoleEnd();

export {};
