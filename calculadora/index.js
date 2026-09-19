import PromptSync from "prompt-sync";
const prompt = PromptSync();

import * as matematica from "./library/functions.js"

let opc = 0

do {
    
let resultado = 0;

    opc = matematica.menu();

    switch (opc) {

        case 1 :

            console.log(`\n=====RESULTADO=====\nResultado da soma = ${resultado = matematica.somar()}`);

        break;

        case 2 :
            
            console.log(`\n=====RESULTADO=====\nResultado da subtração = ${resultado = matematica.subtrair()}`);

        break;

        case 3 :

            console.log(`\n=====RESULTADO=====\nResultado da multiplicação = ${resultado = matematica.multiplicar()}`);

        break;

        case 4 :

            console.log(`\n=====RESULTADO=====\nResultado da divisão = ${resultado = matematica.dividir()}`);

        break;

        case 5 :

            console.log(`\n=====RESULTADO=====\nResultado da potência = ${resultado = matematica.potencias()}`);

        break;

        case 6 :

            console.log(`\n=====RESULTADO===\nResultado da radiciação = ${resultado = matematica.radiciacao()}`);   

    }

} while ( opc != 0);