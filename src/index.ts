import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function alternatingCharacters(s: string): number {
    let sortedAArray = s.split('');
    let counter = 0;

    for (let i = 0; i < sortedAArray.length + 1; i++) {
        if (sortedAArray[i] === sortedAArray[i + 1]) {
            counter++;
        }
    }

    if (counter > 0) {
        counter--;
    }

    return counter;
}

consoleStart();

validateFxn(alternatingCharacters('AAAA'), 3);
validateFxn(alternatingCharacters('BBBBB'), 4);
validateFxn(alternatingCharacters('ABABABAB'), 0);

consoleEnd();
consoleBuffer();

export {};
