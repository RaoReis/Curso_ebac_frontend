function Name(nome) {
    this.nome = nome;
}

function Pokemon(nome, tipo, shiny, level) {
    this.tipo = tipo;
    this.shiny = shiny;
    let _level = level;

    this.getLevel = function() {
        return _level
    }

    this.setLevel = function(valor) {
        if (typeof valor === 'number') {
            _level = valor
        }
    }

    this.xp = function() {
        const maisxp = _level * 1.4;
        _level = maisxp;
    }

    Name.call(this, nome);
}

function Evolucao(nome) {
    Pokemon.call(this, nome, "agua", true, 40)

    this.xp = function() {
        const maisxp = this.getLevel() * 1.3;
        this.setLevel(maisxp);
    }
}

function Mega(nome) {
    Pokemon.call(this, nome, "agua", true, 80)

    this.xp = function() {
        const maisxp = this.getLevel() * 1.25;
        this.setLevel(maisxp);
    }
}

const squirtle = new Pokemon("Squirtle", "agua", true, 15);
const blastoise = new Evolucao("Blastoise");
const megaToise = new Mega("Mega Toise");

console.log(squirtle);
squirtle.xp();
console.log(squirtle.getLevel());

console.log(blastoise);
blastoise.xp();
console.log(blastoise.getLevel());

console.log(megaToise);
megaToise.xp();
console.log(megaToise.getLevel());
