// 1° ETAPA
// Aqui está sendo criada a classe "Personagem". Diferente da classe "Pessoa", os atributos da classe "Personagem" estão sendo definidos dentro de um construtor. Isso quer dizer que o construtor irá exigir três argumentos no momento em que o objeto for instanciado.
var Personagem = /** @class */ (function () {
    function Personagem(nome, idade, obra) {
        this.nome = nome;
        this.idade = idade;
        this.obra = obra;
    }
    return Personagem;
}());
// 2° ETAPA
// Aqui o objeto "personagem_01" está sendo instanciado. Há três argumentos sendo definidos no construtor. Isso acontece porque foi projetado dentro do seu construtor na etapa anterior, tornando assim obrogatório a declaração desses argumentos.
var personagem_01 = new Personagem("Damon Salvatore", 145, "The Vampire Diaries");
// 3° ETAPA
// O objeto "personagem_01" será impresso e irá conter os valores definidos na etapa anterior.
console.log("Damon Salvatore: ", personagem_01);
