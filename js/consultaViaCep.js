
//let prompt = require("prompt-sync")();
//let InformeCEP = prompt("Informe seu CEP: ")
//buscarCEP(InformeCEP)

async function buscarCEP() {
    limpar();

    var txtCep = document.getElementById("txtCep");
    var cepInformado = txtCep.value;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(resultado => resultado.json())
        .then(json => {
            if (json.erro) {
                mostrarTelaErro();
            } else {
                preencherCamposComJson();
            }
        })
        .catch(erro => {
            mostrarTelaErro();
        })

    const json = await promiseConsultCEP.json();

    if (json.erro) {
        mostrarTelaDeErro();
    } else {
        preencherCamposComJson();
    }

    function preencherCamposComJson() {

    }
}

//Preencher os dados do endereço obtido na página HTML
function preencherCamposComJSON(json){
    //essa condição funciona em javascript, é o equivalente a 
    //if(json.bairro != undefined && json.bairro != '')
    if(json.bairro){ 
        //Obter o componente diretamente pelo id funciona (não sabia)
        txtBairro.value = json.bairro;
    }else{
        txtBairro.disabled = false;
    }

    //Versão 2 (mais antiga): obter o componente navegando na árvore DOM
    document.getElementById('txtUF').value = json.uf;
    txtCidade.value = json.localidade;
}

function limpar() {
    divDadosEndereco.style = 'background-color: aqua';
    txtBairro.value = '';
    txtCidade.value = '';
    txtUF.value = '';
    txtBairro.disabled = true;
}


function mostrarTelaErro() {
    limpar();
    divDadosEndereco.style = 'background-color: red';
    alert('CEP informado não existe');
}