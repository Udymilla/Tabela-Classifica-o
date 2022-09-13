var jogadores = [];

exibirJogadoresNaTela(jogadores);

function adicionarJogador() {
  var addJogador = document.getElementById("jogador").value;
  var foi_adicionado = false;
  for (var i = 0; i < jogadores.length; i++)
    if (jogadores[i].nome == addJogador) {
      console.log("jogador já adicionado");
      foi_adicionado = true;
    }
  if (foi_adicionado == false) {
    var objJogador = {
      nome: addJogador,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
    jogadores.push(objJogador);
    document.getElementById("jogador").value = "";
    exibirJogadoresNaTela(jogadores);
    console.log(jogadores);
  }
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates - jogador.derrotas * 2;
  return pontos;
}

function exibirJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='removerJogador(" + i + ")'>Remover</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  for (var j = 0; j < jogadores.length; j++) {
    if (jogadores[j] != jogador) {
      jogadores[j].derrotas++;
      jogadores[j].pontos = calculaPontos(jogadores[j]);
    }
  }
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  for (var j = 0; j < jogadores.length; j++) {
    jogadores[j].empates++;
    jogadores[j].pontos = calculaPontos(jogadores[j]);
  }
  exibirJogadoresNaTela(jogadores);
}

function removerJogador(i) {
  jogadores.splice(i, 1);
  exibirJogadoresNaTela(jogadores);
}

console.log(jogadores);