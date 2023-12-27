// Apenas para testes:
//function exibeResultado(dados) {
//     let resultado = document.getElementById("resultado");
//     resultado.textContent = "Resultado: " + dados;
//     resultado.classList.add("bg-red-500");
// }

function enviarDados() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    const exibeDados = "Nome: " + nome + "\nEmail: " + email + "\nMensagem: " + mensagem;

    function verificaCampos(campos) {
        const erros = [];  // Lista para armazenar mensagens de erro

        for (const campo in campos) {
            if (campos[campo] === undefined || campos[campo].trim() === "") {
                erros.push("O campo '" + campo + "' está incorreto!");
            }
        }

        if (erros.length > 0) {
            alert(erros.join("\n"));  // Exibe todas as mensagens de erro
        } else {
            alert(exibeDados);  
        }
    }
    verificaCampos({ nome, email, mensagem });
}


