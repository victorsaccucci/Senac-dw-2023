
//let prompt = require("prompt-sync")();
//let InformeCEP = prompt("Informe seu CEP: ")
//buscarCEP(InformeCEP)

async function buscarCEP(){
    limpar();
    var txtCep = document.getElementById("txtCep");
    var cepInformado = txtCep.value;

    const promiseConsultCEP = await fetch(`https://viacep.com.br/ws/${cepInformado}/json/`);

    const json = await promiseConsultCEP.json();

    if(json.erro){
        mostrarTelaDeErro();
    }else{
        preencherCamposComJson();
    }

    function preencherCamposComJson(){

    }
  
    //preencher campos
    txtBairro.value = json.bairro;

    if(json.bairro || json.logradouro){
        txtBairro.value = json.bairro;
        txtLogradouro = json.logradouro
    }else{
        txtBairro.disabled = false;
        txtBairro.disabled = false;
    }

    document.getElementById("txtBairro").value = json.bairro;
    document.getElementById("txtCidade").value = json.localidade;
    document.getElementById("txtUF").value = json.uf;


}

function limpar(){
    txtBairro.value = "";
    txtCidade.value = "";
    txtUF.value = "";

    txtBairro.disabled = true;
    txtCidade.disabled = true;
    txtUF.disabled = true;
}

mostrarTelaDeErro(){
    limpar();
}