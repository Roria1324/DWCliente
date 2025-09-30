"use strict";

const numberRandom = (max = 10, min = 1) => {
    return Math.floor((Math.random() * (max - min)) + min);
}

const generarArray = (tamaño, min = 1, max = 10) => {
    return Array.from({length: tamaño}, () => numberRandom(min, max));
}

const array1 = generarArray(10);
const array2 = generarArray(10);
const array3 = generarArray(10);

export const allArrays = [...array1, ...array2, ...array3].filter(num => num > 5);