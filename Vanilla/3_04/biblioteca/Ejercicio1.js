"use strict";

export const names = ["Ana", "Luis", "María", "Javier", "Carmen"];

export const upperName = (names) => {
    const upper = names.map(names => names.toUpperCase())
    return  upper;
}

export const namesReversedOrder = [...names].toSorted().toReversed();

export const nameJsonArray = names.map((name, index) => {
    return{
        id: index,
        name: name
    }
})