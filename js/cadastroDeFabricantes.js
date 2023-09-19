document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const cepInput = document.getElementById("cep");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const cidade = document.getElementById("cidade").value;
        const cep = cepInput.value;
        const uf = document.getElementById("uf").value;
        const nome = document.getElementById("nome").value;
        const cnpj = document.getElementById("cnpj").value;

        if (!cidade || !cep || !uf || !nome || !cnpj) {
            alert("Por favor, insira todos os campos.");
            return;
        }

        const novoFabricante = {
            cidade: cidade,
            cep: cep,
            uf: uf,
            nome: nome,
            cnpj: cnpj
        };

        fetch("http://localhost:8080/api/fabricantes/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoFabricante)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Fabricante cadastrado:", data);
        })
        .catch(error => {
            console.error("Erro ao cadastrar fabricante:", error);
        });
    });

    // Adicione um ouvinte de evento para o campo de CEP perder o foco
    cepInput.addEventListener("blur", buscarCEP);
});

async function buscarCEP() {
    limpar();

    var txtCep = document.getElementById('cep');
    var cepInformado = txtCep.value;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(resultado => resultado.json())
    .then(json => {
        if (json.erro) {
            mostrarTelaErro();
        } else {
            preencherCamposComJSON(json);
        }
    })
    .catch(erro => {
        mostrarTelaErro();
    })
}

function preencherCamposComJSON(json) {
    if (json.localidade) {
        document.getElementById('cidade').value = json.localidade;
    } else {
        document.getElementById('cidade').value = '';
    }

    document.getElementById('uf').value = json.uf;
}

function limpar() {
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
}

function mostrarTelaErro() {
    limpar();
    alert('CEP informado não existe');
}
