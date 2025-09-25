"use strict";

export const discente = {
    id: 1,
    name: "Alex",
    last_name: "Dezso",
    hobbies: ["Dibujar", "Powerlifting", "Videojuegos"],
    notas: { first: 5, second: 8, third: 10 },
    averageMarks: function (){
        let media = (this.notas.first + this.notas.second + this.notas.third) / 3 ;
        return `Media total: ${media.toFixed(2)}`;
    },
    showIinfoDiscente: function () {
        return `El alumno ${this.name} tiene estas aficiones: ${this.hobbies.join(", ")}.`
    },
    showReport: function () {
        return `El alumno ${this.name} ${this.last_name}tiene estas aficiones: ${this.hobbies.join(", ")}. \nSus notas en el primer trimestre: ${this.notas.first}, segundo trimestre: ${this.notas.second} y tercer trimestre: ${this.notas.third}. \n${this.averageMarks()}`;
    }
}