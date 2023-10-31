const urlViaCep = "https://viacep.com.br/ws";

const formulario = {
    nome: document.getElementById("nome"),
    sobrenome: document.getElementById("sobrenome"),
    email: document.getElementById("email"),
    telefone: {
        pais: document.getElementById("ddi"),
        ddd: document.getElementById("ddd"),
        numeroTelefone: document.getElementById("telefone"),
    },
    endereco: {
        cep: document.getElementById("cep"),
        rua: document.getElementById("rua"),
        numero: document.getElementById("numero"),
        complemento: document.getElementById("complemento"),
        bairro: document.getElementById("bairro"),
        cidade: document.getElementById("cidade"),
        UF: document.getElementById("uf")
    },
    anotacoes: document.getElementById("anotacoes")
}

const autoPreencher = async event => {
    event.preventDefault();

    if (event.target.value.length == 8)
        try {
            const cep = event.target.value

            const recurso = `/${cep}/json`
            const promise = await fetch(`${urlViaCep + recurso}`)
            const dados = await promise.json()
            console.log(dados);

            if (dados.erro == true) {

                alert("Insira um CEP válido, e aguarde até que o sistema busque o endereço.")

            }
            else {
                formulario.endereco.rua.value = dados.logradouro
                formulario.endereco.bairro.value = dados.bairro
                formulario.endereco.cidade.value = dados.localidade
                formulario.endereco.UF.value = dados.uf
            }

        } catch (error) {
            console.log(error);
        }

    }



function apagarFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("ddi").value = "";
    document.getElementById("ddd").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("complemento").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("uf").value = "";
    document.getElementById("anotacoes").value = "";
  }



document.getElementById("cep").addEventListener('input', function ()  {
    const valorInput = this.value;
    if (valorInput.length > 8) {
        this.value = valorInput.slice(0, 8);
    }
})
formulario.endereco.cep.addEventListener('blur', autoPreencher)

