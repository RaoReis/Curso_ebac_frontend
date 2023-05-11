function multiplica(numero1: number, numero2: number): number {
    return numero1 * numero2
}

const resultado: number = multiplica(10, 20);
console.log(resultado);

function nomeDizOi(nome: string):string {
    return `Olá ${nome}`
}

const nomeDisseOi: string = nomeDizOi('Raony');
console.log(nomeDisseOi);