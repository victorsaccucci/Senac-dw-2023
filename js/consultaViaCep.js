
async function buscarCEP(){
    limpar();
  
    var txtCep = document.getElementById('cep');
    var cepInformado = txtCep.value;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(resultado => resultado.json())
    .then(json => {
        if(json.erro){
            mostrarTelaErro();
        }else{
            preencherCamposComJSON(json);
        }
    })
    .catch(erro => {
        mostrarTelaErro();
    })
}

function preencherCamposComJSON(json){
    
    if(json.cidade){ 
        cidade.value = json.cidade;
    }else{
        cidade.disabled = false;
    }

    document.getElementById('uf').value = json.uf;
    cidade.value = json.localidade;
}

function limpar(){
    cidade.value = '';
    uf.value = '';
}

function mostrarTelaErro(){
    limpar();

    alert('CEP informado não existe');
}
