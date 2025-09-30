"use strict";
//Reutilización de estructura del primer ejercicio pero añadiendo arrays.
export const createCourseMatricula = (course, year, description) => {
    return {
        course,
        year,
        description,
        student: [],
        matricular: function(discente) {
            this.student = [...this.student, discente];
            return `${discente.name} ${discente.last_name} matriculado \nen ${this.course}`
        }
    };
};

