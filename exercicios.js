// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Por favor, digite a altura do retângulo'));
  const largura = Number(prompt('Por favor, digite a largura do retângulo'));
  const area = altura * largura;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Por favor, digite o ano atual'));
  const anoDeNascimento = Number(prompt('Por favor, digite o ano do seu nascimento'));
  const idade = anoAtual - anoDeNascimento;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Por favor, digite o seu nome');
  const idade = Number(prompt('Por favor, digite sua idade'));
  const email = prompt('Por favor, digite o seu email');
  const mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(mensagem);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCorFavorita = prompt('Por favor, digite sua primeiro cor favorita');
  const segundaCorFavorita = prompt('Por favor, digite sua segunda cor favorita');
  const terceiraCorFavorita = prompt('Por favor, digite sua terceira cor favorita');
  let listaDeCoresFavoritas = [primeiraCorFavorita, segundaCorFavorita, terceiraCorFavorita];
  console.log(listaDeCoresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringEmMaiuscula = string.toUpperCase();
  return stringEmMaiuscula;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeDeIngressos = custo / valorIngresso;
  return quantidadeDeIngressos; 
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanhoPrimeiraString = string1.length;
  const tamanhoSegundaString = string2.length;
  const possuemMesmoTamanho = tamanhoPrimeiraString === tamanhoSegundaString;
  return possuemMesmoTamanho;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0];
  return primeiroElemento;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const tamanhoArray = array.length;
  const ultimoElemento = array[tamanhoArray - 1];
  return ultimoElemento;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}