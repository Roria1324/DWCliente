"use strict"
//Creación de constructor vacío.
export const createCourse = (course, year, description) => {
    return {
        course,
        year,
        description,
        student: []
    };
};