let inputAdultos=document.getElementById("adultos");
let inputCriancas=document.getElementById("criancas");
let inputDuracao=document.getElementById("duracao");
let resultado=document.getElementById("resultado");

//util para testar o valor do input
//console.log(inputAdultos.value=6,inputCriancas.value=3,inputDuracao.value=9);
//aplicativo para iniciar em js
function calcular(){
  //  console.log("calculando...")

    let adultos=inputAdultos.value;
    let criancas=inputCriancas.value;
    let duracao=inputDuracao.value;


    let qtdTotalCarne = carnePpessoa(duracao) * adultos + (carnePpessoa(duracao) / 2 * criancas);
    let qtdTotalBebida = bebidaPpessoa(duracao)*adultos + (bebidaPpessoa(duracao) / 2 * criancas);
    
    resultado.innerHTML=`<p>${qtdTotalCarne} kl de carne</p>
                        <p>${qtdTotalBebida} litros de bebida</p>
                        `
}

function carnePpessoa(duracao){
    let carne = 400;
    if(duracao >= 6){
        carne=650;
    }
    return carne;
}

function bebidaPpessoa(duracao){
    let bebida=1200;
    if(duracao >= 6){
        bebida=2000;
    }
    return bebida;
}