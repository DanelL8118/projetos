import PromptSync from "prompt-sync";
const prompt = PromptSync();

function menu (a) {

console.log(`\n=====MENU=====\n[1] - SOMAR\n[2] - SUBTRAÇÃO\n[3] - MULTIPLICAR\n[4] - DIVIDIR\n[5] - POTÊNCIA\n[6] - RADICIAÇÃO\n[0] - SAIR\n==============`);
a = Number(prompt(`digite a operação que deseja: `));
    while ( a < 0 || a > 6 || isNaN(a)) { a = Number(prompt(`digite uma opção válida: `)); }

return a;

}

function somar () {
    
    let tam = Number(prompt(`digite a quantidade de valores que deseja: `));
        while (tam <= 0) { tam = Number(prompt(`digite uma quantidade de valores válida: `)); }

    let vetor = [tam], resultado = 0;

            
        for (let i = 0; i < tam; i++) {

            vetor[i] = Number(prompt(`número ${i+1}: `))
            resultado += vetor[i];
        }

return resultado;

}

function subtrair () {

    let tam = Number(prompt(`digite a quantidade de valores que deseja: `));
        while (tam <= 0) { tam = Number(prompt(`digite uma quantidade de valores válida: `)); }

    let vetor = [tam], resultado=0;

        for (let i = 0; i < tam; i++) {
        
            vetor[i] = Number(prompt(`número ${i+1}: `))
        
            if (i == 0) { resultado = vetor[i]; }

            else { resultado -= vetor[i]; }

        }

return resultado;

}

function multiplicar () {

    let tam = Number(prompt(`digite a quantidade de valores que deseja: `));
    while (tam <= 0) { tam = Number(prompt(`digite uma quantidade de valores válida: `)); }

    let vetor = [tam], resultado = 1;

    for (let i = 0; i < tam; i++) {

        vetor[i] = Number(prompt(`número ${i+1}: `));
        resultado *= vetor[i];
    }

return resultado;

}

function dividir () {

    let tam = Number(prompt(`digite a quantidade de valores que deseja: `));
    while (tam <= 0) { tam = Number(prompt(`digite uma quantidade de valores válida: `)); }

    let vetor = [tam], resultado = 0;

    for (let i = 0; i < tam; i++) {

        vetor[i] = Number(prompt(`número ${i+1}: `));
        while (vetor[i] == 0) { vetor[i] = Number(prompt(`digite um valor válido diferente de 0: `)); }

        if (i == 0) { resultado = vetor[i]; }

        else { resultado /= vetor[i]; }
    }

return resultado;

}

function potencias () {

    let base = 0, pot = 0, resultado = 0;

    base = Number(prompt(`digite a base da potência: `));
    pot = Number(prompt(`digite o expoente da potência: `));

    resultado = base ** pot;

return resultado;

}

function radiciacao () {

    let base = 0, rad = 0, resultado=0;

    base = Number(prompt(`digite o radicando da radiciação: `));
    rad = Number(prompt(`digite o indice da radiciação: `));

    resultado = base ** (1/rad);

return resultado;

}

export {

menu,
somar,
subtrair,
multiplicar,
dividir,
potencias,
radiciacao

};