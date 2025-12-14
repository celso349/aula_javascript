import { entradaDados } from "readline-sync";

console.log('aplicação de juros');

let valor_divida = entradaDados.question('informe o valor da divida: R$ ');
let dias_vencimento = entradaDados.question('informe os dias de atraso: ');

console.log("\nValor original da dívida: R$ "+valor_divida);
console.log("Dias atrasados: "+dias_vencimento);
console.log("Taxa de Juros: 0%");
console.log("Valor total com juros: R$ 0");