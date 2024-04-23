function calcularNivel(vitorias, derrotas) {
  var saldoVitorias = vitorias - derrotas;
  var nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Mestre";
  } else {
    nivel = "Radiante";
  }

  return { saldoVitorias: saldoVitorias, nivel: nivel };
}

var vitorias = 75;
var derrotas = 25;

var resultado = calcularNivel(vitorias, derrotas);

console.log("O Herói tem saldo de " + resultado.saldoVitorias + " e está no nível " + resultado.nivel);
