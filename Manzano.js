//Exercicio A pag 46
//Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. 

function A1() {
  let valor = parseInt(document.getElementById("valor").value)
  let contador = 1;

  while (contador <= 10) {
    let tabuada = valor * contador
    document.getElementById(`${contador}`).innerHTML = valor + " X " + contador + " = " + tabuada + "<br>"
    contador++
  }
}

//Exercicio B pag 46
//Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100)

function B1() {
  let contador = 1
  let soma = 0

  while (contador <= 100) {
    soma = Number(soma + contador)
    contador++
  }

  document.getElementById("mostra").innerHTML = "O resultado da soma dos números inteiro de 1 ate 100 é " + soma
}
//Exercicio C pag 46
//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
//1 até 500.

function C1() {
  let contador = 2
  let soma = 0

  while (contador <= 500) {
    soma += contador
    contador += 2
  }

  document.getElementById("mostra").innerHTML = `A soma dos pares de 1 ate 500 é ${soma}`
}
//Exercicio D pag 46
//Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar
// se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução
// se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. 

function D1() {
  let contador = 0

  while (contador <= 20) {

    if (contador % 2 != 0) {
      alert(contador)
      document.getElementById(`${contador}`).innerHTML = contador
    }
    contador++
  }
}

//Exercicio E pag 46
// Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
// considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
// neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 

function E1() {
  let contador = 1
  let potencia = 1
  alert("3 elevado a 0 é 1")

  while (contador <= 15) {
    potencia *= 3
    alert("3 elevado a " + contador + " é " + potencia)
    contador++
  }
}

//Exercicio F pag 46
// Elaborar um programa que apresente como resultado o valor de uma potência de uma base
// qualquer elevada a um expoente qualquer, ou seja, de BE
// , em que B é o valor da base e E o valor
// do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
// portuguol (^). 

function F1() {

  let base = Number(prompt('Escreva a base da operação:'));
  let expoente = Number(prompt('Escreva a exponenciação da operação:'));
  let contadora = 1;
  let potencia = 1;

  while (contadora <= expoente) {
    potencia *= base;
    contadora++
  }
  document.getElementById('mostra').innerHTML = (base + " elevado a " + expoente + " é = " + potencia)
}


//Exercicio G pag 46
// Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
// Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
// pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
// valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
// é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc. 

function G1() {
  let contador = 1
  let numeroAtual = 1
  let numeroAtecessor = 0
  let soma = 0
  alert(numeroAtual)

  while (contador < 15) {
    soma = numeroAtual + numeroAtecessor
    alert(soma)
    numeroAtecessor = numeroAtual
    numeroAtual = soma
    contador++
  }
}

//Exercicio H pag 46
// Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
// 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
// programa deve apresentar os valores das duas temperaturas. A fórmula de conversão
// é 5 9 +160 = C F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

function H1() {
  let celsius = 10;
  let fahrenheit = 0

  while (celsius <= 100) {
    fahrenheit = (9 * celsius + 160) / 5
    console.log(celsius + "° graus celsius = " + fahrenheit + "° graus fahrenheit")
    celsius += 10
  }
}

//Exercicio I pag 46
// Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do
// somatório e a média aritmética dos valores lidos. 

function I1() {
  let contador = 1
  let soma = 0
  let media = 0

  while (contador <= 10) {
    let valores = Number(prompt(`Digite o ${contador} número`))
    soma += valores
    media = soma / contador
    contador++
  }
  document.getElementById('mostra').innerHTML = (`A soma dos valores digitados é ${soma} <br> A média aritimética dos valores é ${media}`)
}

//Exercicio J pag 46
//Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
//pares situados na faixa numérica de 50 a 70. 

function J1() {
  let contador = 50
  let soma = 0;
  let pares = 0

  while (contador <= 70) {

    if (contador % 2 == 0) {
      soma += contador
      pares++
    }
    contador++
  }

  let media = soma / pares

  document.getElementById("mostra").innerHTML = "A soma dos valores pares de 50 ate 70 é " + soma + "<br> A média dos números é " + media
}
//Exercicio K pag 46
// Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
//   banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
//   nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
//   do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
//   calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
//   total acumulado da área residencial. 

function K1() {
  let continuar = 'sim'
  let area = 0
  let areaTotal = 0
  let comodos = 0

  while (continuar == 'sim') {
    let comodo = prompt("Digite o nome do cômodo")
    let largura = Number(prompt("Digite a largura do cômodo"))
    let comprimento = Number(prompt("Digite o comprimento do cômodo"))

    area = largura * comprimento

    alert(`A área do cômodo ${comodo} é ${area}m2`)
    areaTotal += area
    comodos++
    continuar = prompt("Quer continuar a calcular novos cômodos? (sim/não)")
  }
  alert(`Quntidade de cômodos lidos: ${comodos}`)
  alert(`A soma total da área dos comodos lidos é: ${areaTotal}m2`)
}


//LAÇO DE REPETIÇÃO DO/REPITA
//Exercico A pag 50
//Apresentar os quadrados dos números inteiros de 15 a 200.

function A2() {
  let i = 15;

  do {
    alert(i * i);
    i++;
  } while (i <= 200);

}

//Exercico B pag 50
//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
//1 até 500. 

function B2() {

  let i = 1;
  let somaPares = 0;

  do {
    if (i % 2 === 0) {
      somaPares += i;
    }
    i++;
  } while (i <= 500);

  alert("O somatório dos valores pares de 1 a 500 é: " + somaPares);
}

//Exercico C pag 50
// Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o
// número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a
// instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o
// próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1.

function C2() {

  let contador = 1;

  while (contador < 200) {
    if (contador % 4 === 0) {
      alert(contador);
    }
    contador++;
  }
}

//Exercico D pag 50
// Elaborar um programa que efetue o cálculo e no final apresente o somatório do número de grãos de
// trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra: colocar um grão de
// trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior. Ou seja, no primeiro
// quadro coloca-se 1 grão, no segundo quadro colocam-se 2 grãos (neste momento têm-se 3 grãos),
// no terceiro quadro colocam-se 4 grãos (tendo neste momento 7 grãos), no quarto colocam-se 8
// grãos (tendo-se então 15 grãos) até atingir o sexagésimo quarto (64o
// ) quadro. Utilize variáveis do
// tipo real como acumuladores.

function D2() {
  let numQuadros = 64;
  let graos = 1;
  let somaGraos = 1;

  let i = 2;

  do {
    graos *= 2;
    somaGraos += graos;
    i++;
  } while (i <= numQuadros);

  alert(`O número total de grãos no tabuleiro é ${somaGraos}.`);

}

//Exercico E pag 50
// Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o
// total do somatório da fatorial de cada valor lido. 

function E2() {
  let contador = 1;
  let total = 0;

  do {
    let valor = parseInt(prompt(`Informe o ${contador}º valor:`));

    let fatorial = 1;
    for (let i = 2; i <= valor; i++) {
      fatorial *= i;
    }

    total += fatorial;

    contador++;
  } while (contador <= 15);

  alert(`O total do somatório das fatoriais é ${total}.`);
}

//Exercico F pag 50
// Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o
// total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras
// dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve
// parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar
// como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da
// média.

function F2() {
  let soma;
  let totalValores;
  let numero = parseInt(prompt("Digite um número:"));
  document.getElementById('manzano').innerHTML = resultado;

  do {

    if (numero >= 0) {
      soma += numero;
      totalValores++;
    }
  }

  while (numero >= 0);

  if (totalValores > 0) {
    let media = soma / totalValores;
    alert('Total da soma: ' + soma);
    alert('Média aritmética:' + media);
    alert('Total de valores lidos:' + totalValores);
  }

  else {
    alert("Nenhum valor foi lido.");
  }
}

//Exercicio G pag 50
// Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
// situados na faixa numérica de 1 a 10.

function G2() {
  let num = 1;
  let fatorial;

  do {

    if (num % 2 !== 0) { // se o número for ímpar
      fatorial = 1;

      for (let i = num; i >= 1; i--) { // calcula o fatorial do número
        fatorial *= i;
      }
      alert(`O fatorial de ${num} é ${fatorial}`);
    }
    num++;
  }

  while (num <= 10);
}

//Exercicio H pag 50
// Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
//   banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
//   nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
//   do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
//   calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
//   total acumulado da área residencial.

function H2() {
  let areaTotal = 0;
  let resposta = "SIM";

  do {
    // solicita a entrada do nome, largura e comprimento do cômodo
    let nome = prompt("Digite o nome do cômodo:");
    let largura = parseFloat(prompt("Digite a largura do cômodo em metros:"));
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo em metros:"));

    // calcula a área do cômodo
    let area = largura * comprimento;

    // exibe a área do cômodo e solicita confirmação do usuário
    alert(`A área do cômodo ${nome} é ${area} metros quadrados.`);
    resposta = prompt("Deseja calcular a área de mais algum cômodo? (SIM/NAO)").toUpperCase();

    // adiciona a área do cômodo à área total da residência
    areaTotal += area;
  }

  while (resposta === "SIM");

  // exibe a área total da residência
  alert('A área total da residência é:' + areaTotal);
}

//Exercicio I pag 50
// Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
// seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
// usuário.

function I2() {
  let maior = 0;
  let menor = 0;
  let valor = parseInt(prompt("Digite um valor positivo inteiro (ou um valor negativo para encerrar a leitura):"));

  do {

    if (valor > 0) { // se o valor for positivo

      if (maior === 0 || valor > maior) { // verifica se é o maior valor
        maior = valor;
      }

      if (menor === 0 || valor < menor) { // verifica se é o menor valor
        menor = valor;
      }
    }
  }

  while (valor >= 0);

  alert('O maior valor informado foi:' + maior);
  alert('O menor valor informado foi: ' + menor);
}

//Exercicio J pag 50
// Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer.
// Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético
// DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve
// apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo. 


function J2() {
  let dividendo = parseInt(prompt("Digite o dividendo:"));
  let divisor = parseInt(prompt("Digite o divisor:"));
  let quociente = 0;

  while (dividendo >= divisor) {
    dividendo = dividendo - divisor;
    quociente++;
  }

  alert('O resultado inteiro da divisão:' + quociente);
}

//LAÇO DE REPETIÇÃO FOR/PARA
//Execicio A pag 66
//Apresentar os quadrados dos números inteiros de 15 a 200.

function A3() {
  for (let i = 15; i <= 200; i++) {
    let quadrado = i * i;

    alert(`O quadrado de ${i} é ${quadrado}.`);
  }
}

//Execicio B pag 66
//Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. 

function B3() {

  let number = parseInt(prompt("Digite um número para ver sua tabuada:"));

  for (let i = 1; i <= 10; i++) {
    let resultado = number * i;

    alert(`${number} x ${i} = ${resultado}`);
  }
}

//Execicio C pag 66
//Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). 

function C3() {
  let soma1 = 0;

  for (let i = 1; i <= 100; i++) {
    soma1 += i;
  }

  alert('A soma dos cem primeiros números inteiros é:' + soma1);
}

//Execicio D pag 66
//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
//1 até 500. 

function D3() {

  let soma = 0;

  for (let i = 1; i <= 500; i++)
    if (i % 2 === 0) {
      soma += i;
    }
}

alert(`O somatório dos valores pares de 1 a 500 é: ${soma}`);

//Execicio E pag 66
// Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar
// se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução
// se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. 

function D3() {

  for (let i = 0; i <= 20; i++)
    if (i % 2 !== 0) {
      alert(i);
    }
}

//Execicio F pag 66
// Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o
// número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a
// instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o
// próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1. 

function F3() {
  for (let i = 1; i < 200; i++) {
    if (i % 4 === 0) {
      alert(i);
    }
  }
}

//Execicio G pag 66
// Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
// considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
// neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 

function G3() {
  for (let i = 1; i < 200; i++) {
    if (i % 4 === 0) {
      alert(i);
    }
  }
}

//Execicio H pag 66
// Elaborar um programa que apresente como resultado o valor de uma potência de uma base
// qualquer elevada a um expoente qualquer, ou seja, de BE
// , em que B é o valor da base e E o valor
// do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
// portuguol (^). 

function H3() {
  let base = parseInt(prompt("Informe o valor da base: "));
  let expoente = parseInt(prompt("Informe o valor do expoente: "));

  let resultado = base;

  for (let i = 1; i < expoente; i++) {
    resultado = resultado * base;
  }

  alert(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`)
}

//Execicio I pag 66
// Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
// Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
// pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
// valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
// é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc. 
function I3() {

  let num1 = 1;
  let num2 = 1;
  let fibonacci = num1 + ", " + num2;

  for (let i = 3; i <= 15; i++) {
    let num3 = num1 + num2;
    fibonacci += ", " + num3;
    num1 = num2;
    num2 = num3;
  }

  alert("Série de Fibonacci até o décimo quinto termo:");
  alert(fibonacci);


}
//Execicio J pag 66
// Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
// 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
// programa deve apresentar os valores das duas temperaturas. A fórmula de conversão
// é 5 9 +160 = C F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. 
function J3() {
  for (let c = 10; c <= 100; c += 10) {
    let f = (9 / 5) * c + 32;
    alert(`${c}°C = ${f}°F`);
  }

}

//Execicio K pag 66
// Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
// situados na faixa numérica de 1 a 10. 
function K3() {
  let fatorial = 1;

  for (let i = 1; i <= 10; i += 2) {
    for (let j = 1; j <= i; j++) {
      fatorial *= j;
    }
    alert(`O fatorial de ${i} é ${fatorial}`);
    fatorial = 1;
  }
}
