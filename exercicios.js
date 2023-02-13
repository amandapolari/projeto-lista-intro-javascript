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
  const tamanhoArray = array.length;
  const primeiroElemento = array[0];
  const ultimoElemento = array[tamanhoArray - 1];
  array.shift();
  array.pop();
  array.unshift(ultimoElemento);
  array.push(primeiroElemento);
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const parametroUmEmMaiusculo = string1.toUpperCase();
  const parametroDoisEmMaiusculo = string2.toUpperCase();
  const saoIguais = parametroUmEmMaiusculo == parametroDoisEmMaiusculo;
  return saoIguais;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Por favor, digite o ano atual'));
  const anoNascimento = Number(prompt('Por favor, digite o ano do seu nascimento'));
  const anoDeEmissao = Number(prompt('Por favor, digite o ano atual'));
  const idade = anoAtual - anoNascimento;
  const tempoDeEmissao = anoAtual - anoDeEmissao;
  const ate20anos = (idade <= 20) && (tempoDeEmissao >= 5);
  const ate50anos = (idade > 20 && idade <= 50) && (tempoDeEmissao >= 10);
  const maisDe50 = (idade > 50) && (tempoDeEmissao >= 15);
  const retornaTrueSe = (ate20anos===true) || (ate50anos===true) || (maisDe50===true);
  console.log(retornaTrueSe);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  // const divisivelPor4 = ano % 4 === 0;
  // const divisivelPor100 = ano % 100 === 0;
  // const divisivelPor400 = ano % 400 === 0;
  // const eBissexto = divisivelPor4 || divisivelPor400 || divisivelPor100;
  // return eBissexto;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const perguntaMaiorIdade = prompt('Você tem mais de 18 anos?');
  const perguntaEnsinoMedio = prompt('Você possui ensino médio completo?');
  const perguntaDisponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?');
  const confirmeMaiorIdade = perguntaMaiorIdade === 'sim';
  const confirmaEnsinoMedio = perguntaEnsinoMedio === 'sim';
  const confirmaDisponibilidade = perguntaDisponibilidade === 'sim';
  const podeSeInscrever = confirmeMaiorIdade && confirmaEnsinoMedio && confirmaDisponibilidade;
  console.log(podeSeInscrever)
}