const prompt = require ('prompt-sync');
const entrada = prompt ();

let anoAtual = 2024;
const nomeCompleto = "Samuel Vitor";
let idade = 17;
const cursoFaculdade = "Direito";
let cidadeAtual = "São José dos Pinhais";

console.log(`Olá eu sou o ${nomeCompleto}, eu tenho ${idade} anos, moro em ${cidadeAtual}, ano que vem estar cursando ${cursoFaculdade}.`);

anoAtual = 2025;

let idadeFutura = 18;

console.log(`Para o ano que vem, o meu nome continuará ${nomeCompleto}, vou ter ${idadeFutura} anos de idade, planejo continuar morando em ${cidadeAtual}, e planejo também estar na faculdade de ${cursoFaculdade}.`);

//Agência de Viagens

var nomeComprador = entrada("Qual o seu nome?");
var cpfComprador = entrada("Qual o seu cpf?");
var idadeComprador = entrada("Qual é a sua idade? ");
const listadeDestinos = new Array(
  "Toronto",
  " Berlim",
  " Las Vegas",
  " Gramado",
  " e Paris"
);

console.log(`Olá Senhor ${nomeComprador}, portador do CPF ${cpfComprador}, com idade de ${idadeComprador}, confirmamos que a sua passagem para ${listadeDestinos} foi confirmada.`);


console.log(listadeDestinos[3]);
console.log("");
console.log(`Olá ${nomeComprador} foi adicionado mais uma viagem `)
listadeDestinos.push("Buenos Aires");


if(idadeComprador<18){
  console.log(`Infelizmente não podemos vender uma passagem pois o Senhor é menor de idade`)
}

if(idadeComprador>18){
  console.log(`Sua passagem foi adquirida com sucesso. Verifique: ${listadeDestinos}`)
}
