var Personagem = /** @class */ (function () {
    function Personagem(nome, idade, obra) {
        this.nome = nome;
        this.idade = idade;
        this.obra = obra;
    }
    return Personagem;
}());
var personagem_01 = new Personagem("Damon Salvatore", 145, "The Vampire Diaries");
console.log("Damon Salvatore: ", personagem_01);
