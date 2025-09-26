"use strict"

import { discente } from "./ejercicio3.js";

export const createCourse = (course, year, description) => {
    return {
        course,
        year,
        description,
        student: [],
        matricular(discente) {
            this.student = [...this.student, discente];
            return `${discente.name} ${discente.last_name} matriculado en ${this.course}`
        }
    };
};