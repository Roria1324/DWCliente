"use strict";
//Validaciones de objetos Json que 
export const showObject = (object) => {
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            const element = object[key];
            if (Array.isArray(element)){
                if (element.length === 0) {
                    console.log(`Array vacío.`);
                    continue;
                }
                console.log(`El array tiene estos elementos: ${element.join(", ")}`);
                continue;
            }
            if (typeof element === "function"){
                console.log(`El objeto tiene estas funciones: \n${element}`);
                continue;
            }
            if (typeof element === "object" && !Array.isArray(element)){
                showObject(element);
                continue;
            }
            console.log(`${key}: ${element}. Es un ${typeof element}.`);
        }
    }
}