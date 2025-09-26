"use strict";

 export const createCourseNew = (course, year, description) => {
    console.log(`Este curso tiene estos elementos.`);

    const properties = {course, year, description, student: []};

    for (let key in properties) {
        if (Object.prototype.hasOwnProperty.call(properties, key)) {
            let element = properties[key];
            if (element == 0) {
                console.log(`No hay estudiantes.`);
                continue;
            }
            if(element !== undefined){
                console.log(`${key}: ${element}`);
            }
        }
    }
}