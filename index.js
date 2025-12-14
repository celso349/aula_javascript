import entradaDados from 'readline-sync';

console.log("Calculando plicação de Juros: ");

let valor_juros;

let valor_divida = entradaDados.question("\nDigite o valor da sua divida: R$ ");

if(valor_divida > 0)
{
    let dias_vencimento = entradaDados.question("Informe há quantos dias a sua divida esta atrasada: ");

    if(dias_vencimento > 0)
    {
        if(dias_vencimento < 15)
        {
            valor_juros = 5;
        }
        else
        {
            valor_juros = 10;
        }

        valor_divida = Number(valor_divida);
        dias_vencimento = Number(dias_vencimento);

        let total_juros = (valor_divida / 100) * valor_juros;
        let valor_total = valor_divida + total_juros;

        console.log("\nValor original da dívida: R$ "+valor_divida);
        console.log("Dias atrasados: "+dias_vencimento);
        console.log("Taxa de Juros: "+valor_juros+"%");
        console.log("Valor total com juros: R$ "+valor_total);
    }
    else
    {
        console.log("sua divida esta em dia!");
    }
}
else
{
    console.log("O valor da dívida deve ser maior que zero!")
}