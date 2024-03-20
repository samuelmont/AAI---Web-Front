function getData() {
    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");

    setDefault();
    validacao(peso, altura);
}

function setDefault(){
    peso.style.backgroundColor = '#ffffff';
    altura.style.backgroundColor = '#ffffff';
}

function validacao(pesoValor, alturaValor) {
    let peso = pesoValor;
    let altura = alturaValor;
    if(peso.value == ""){
        tratamentoErro(peso, "Você precisa preencher o campo Peso");
    } else if(altura.value == ""){
        tratamentoErro(altura, "Você precisa preencher o campo Altura");
    } else if(isNaN(peso.value)) {
        tratamentoErro(peso, "O campo peso aceita somente números");
    } else if(isNaN(altura.value)) {
        tratamentoErro(altura, "O campo altura aceita somente números");
    } else {
        let [imcValor, message] = calculaImc(peso.value, altura.value);
        setData(imcValor, message)
    }
}

function tratamentoErro(tag, message) {
    tag.focus();
    tag.style.backgroundColor = '#eda29d';
    alert(message);
}

function calculaImc(pesoValor, alturaValor) {
    let peso = pesoValor;
    let altura = alturaValor;

    let imc = peso/(altura*altura);
    let retorno = [];

    if (imc <= 18.5) {
        retorno = [imc, "Abaixo do peso"];
    } else if (imc > 18.5 && imc <=24.9) {
        retorno = [imc, "Peso normal"];
    } else if (imc > 24.9 &&imc <= 29.9) {
        retorno = [imc, "Acima do peso"];
    } else if (imc > 29.9 &&imc <= 34.9) {
        retorno = [imc, "Obesidade grau I"];
    } else if (imc > 34.9 && imc <= 40) {
        retorno = [imc, "Obesidade grau II"];
    }else if (imc > 40) {
        retorno = [imc, "Obesidade grau III"];
    }else {
        retorno = [imc, "Erro"];
    }

    return retorno;
}

function setData(Imc, messageRecebida){
    let imc = Imc;
    let message = messageRecebida;

    let valorImc = document.getElementById('valorImc');
    let statusImc = document.getElementById('statusImc');

    valorImc.innerText = "Valor do IMC: " + Math.floor(imc);
    statusImc.innerText = "Status do IMC: " + message;
}