document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const cidade = document.getElementById("cidade").value;
        const cep = document.getElementById("cep").value;
        const uf = document.getElementById("uf").value;
        const nome = document.getElementById("nome").value;
        const cnpj = document.getElementById("cnpj").value;

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
});
