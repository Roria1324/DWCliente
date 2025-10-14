"use strict";

const numberRandom = ( min = 1, max = 10) => {
    return Math.floor((Math.random() * (max-min)) + min);
}
const sameNumber = (array) => {
    for (let i = 0; i < array.length; i++ ){
        if (array[i] === array[i+1]){
            return false;
        } else {
            return fillArray(10);
        }
    }
}

const fillArray = (tamaño ,min = 1, max = 10) => {
    return sameNumber(Array.from({length: tamaño}, () => numberRandom(min, max)));
}



export const array = fillArray(10);