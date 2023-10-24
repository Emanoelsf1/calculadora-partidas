function NivelRanqueadas(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldo = vitorias - derrotas;

    // Determina o nível com base no saldo de vitórias
    let nivel;
    

    // Estrutura de Decisão
    if (saldo <= 10){
        nivel = "Ferro"

    } else if(saldo >= 11 && saldo <= 20) {
        nivel = "Bronze"

    } else if (saldo >= 21 && saldo <= 50){
        nivel = "Prata"

    } else if (saldo >= 51 && saldo <= 80) {
        nivel = "Ouro"

    } else if (saldo >= 81 && saldo <= 90) {
        nivel = "Diamante"

    } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lendario"

    } else if (saldo >= 101){
        nivel = "Imortal"
    }

   
    // Retorno a mensagem de saída
    return `O Herói tem um saldo de ${saldo} está no nível de ${nivel}!`;
}

let vitorias = 90;
let derrotas = 20;
const resultado = NivelRanqueadas(vitorias, derrotas);
console.log(resultado);
