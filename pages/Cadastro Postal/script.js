// Buscar CEP automaticamente
document.getElementById("cep").addEventListener("blur", async function () {
    let cep = this.value.replace(/\D/g, '');

    if (cep.length == 8) {
        let url = `https://viacep.com.br/ws/${cep}/json/`;

        try {
            let response = await fetch(url);
            let data = await response.json();

            if (!data.erro) {
                document.getElementById("estado").value = data.uf;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("endereco").value = data.logradouro;
            } else {
                alert("CEP não encontrado!");
            }
        } catch {
            alert("Erro ao consultar CEP!");
        }
    }
});

// Exibir mensagem ao enviar formulário
document.getElementById("formCadastro").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("mensagem").classList.remove("d-none");

    // Limpar formulário
    this.reset();
    document.getElementById("estado").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("endereco").value = "";
});
