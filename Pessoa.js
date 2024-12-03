// 1° ETAPA
// Aqui está sendo criada a classe Pessoa. Ela possui três atributos, sendo eles "nomeCompleto", "apelido" e "idade". Inicialmente os atributos não possuem valor.
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this.nomeCompleto = "";
        this.apelido = "";
        this.idade = 0;
    }
    return Pessoa;
}());
// 2° ETAPA
// Aqui um objeto está sendo instanciado. No exemplo em questão, denominei o objeto como "pessoa_01".
var pessoa_01 = new Pessoa();
// 3° ETAPA
// Os atributos do objeto "pessoa_01" estão recebendo valores.
pessoa_01.nomeCompleto = "Iara Elise da Silva Alves";
pessoa_01.apelido = "Lise";
pessoa_01.idade = 21;
// 4° ETAPA
// O objeto "pessoa_01" será impresso e irá conter os valores definidos na etapa anterior.
console.log("pessoa: ", pessoa_01);
var pessoa_2 = new Pessoa();
pessoa_2.nomeCompleto = "Frida Bigode da Silva Alves";
pessoa_2.apelido = "Bigode";
pessoa_2.idade = 3;
console.log("pessoa: ", pessoa_2);
