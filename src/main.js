const alunos1 = 
[
    {"nome": "Guilherme", "nota": 3},
    {"nome": "Nath", "nota": 5},
    {"nome": "Drielle", "nota": 10},
    {"nome": "Luiz", "nota": 8},
    {"nome": "Marcio", "nota": 7},
    {"nome": "Monica", "nota": 9},
    {"nome": "Carlos", "nota": 4},
    {"nome": "Thiago", "nota": 6 }
]
console.log(alunos1);


// const passou1 = alunos1.filter(function(item) {
//     return item.nota >= 6
// })
// const passou1 = alunos1.filter(item => item.nota >= 6)
// console.log(passou1);


function passouDeAno(item) {
    return item.nota >= 6
}

const alunoPassou = alunos1.filter(passouDeAno)

console.log(alunoPassou);


//
/* function Alunos(nomeDoAluno, notaDoAluno) {
    this.nome = nomeDoAluno;
    this.nota = notaDoAluno;
}

const aluno1 = new Alunos('Guilherme', 3);
const aluno2 = new Alunos('Nath', 5);
const aluno3 = new Alunos('Drielle', 10);
const aluno4 = new Alunos('Luiz', 8);
const aluno5 = new Alunos('Marcio', 7);
const aluno6 = new Alunos('Monica', 9);
const aluno7 = new Alunos('Carlos', 4);
const aluno8 = new Alunos('Thiago', 6);

const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7, aluno8];
console.log(alunos);

const passou = alunos.filter((item) => {
    return item.nota >= 6
})

console.log(passou); */