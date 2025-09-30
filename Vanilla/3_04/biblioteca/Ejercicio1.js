"use strict";


const names = ["Ana", "Luis", "María", "Javier", "Carmen"];

 const upperName = (names) => {
    const upper = names.map(names => names.toUpperCase())
    return  upper;
}

 const namesReversedOrder = [...names].toSorted().toReversed();

 const nameJsonArray = names.map((name, index) => {
    return{
        id: index,
        name: name
    }
})

export {upperName, namesReversedOrder, nameJsonArray};