"use strict";

let alturaMarcos = 1.8;
let masaMarcos = 90;

let alturaJuan = 1.7;
let masaJuan = 95;

function calcularImc(masa , altura){
    return masa / (altura * altura)
}

export function compararImc(){
    let imcMarcos = calcularImc(masaMarcos, alturaMarcos);
    let imcJuan = calcularImc(masaJuan, alturaJuan);
    let comparaImc = imcMarcos > imcJuan;
    
    return "Marcos tiene un imc de :" + imcMarcos + " \n Juan tiene un imc de :" + imcJuan + "\n ¿Tiene  Marcos mayor IMC que Juan?: " + comparaImc
}
    