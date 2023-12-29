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
    
    function verificaCampos() {

        let erroNome = 0;
        let erroEmail = 0;
        let erroMensagem = 0;
        
        let nomeTexto = document.getElementById("nomeTexto");
        let emailTexto = document.getElementById("emailTexto");
        let mensagemTexto = document.getElementById("mensagemTexto");
        
        // Remova todas as classes antes de verificar novamente
        nomeTexto.classList.remove('text-red-600', 'text-zinc-700');
        emailTexto.classList.remove('text-red-600', 'text-zinc-700');
        mensagemTexto.classList.remove('text-red-600', 'text-zinc-700');
        
        if (nome === undefined || nome.trim() === "") {
            nomeTexto.classList.add('text-red-600');
            erroNome = 1;
        } else {
            nomeTexto.classList.add('text-zinc-700');
        }
        
        if (email === undefined || email.trim() === "") {
            emailTexto.classList.add('text-red-600');
            erroEmail = 1;
        } else {
            emailTexto.classList.add('text-zinc-700');
        }
        
        if (mensagem === undefined || mensagem.trim() === "") {
            mensagemTexto.classList.add('text-red-600');
            erroMensagem = 1;
        } else {
            mensagemTexto.classList.add('text-zinc-700');
        }
        
        let erros = erroNome + erroEmail + erroMensagem;
        
        if (erros === 0) {
            enviarWhatsapp();
        }
        
        // const erros = [];  // Lista para armazenar mensagens de erro

        // for (const campo in campos) {
        //     if (campos[campo] === undefined || campos[campo].trim() === "") {
        //         erros.push("O campo '" + campo + "' está incorreto!");
        //     }
        // }

        // if (erros.length > 0) {
        //     alert(erros.join("\n"));  // Exibe todas as mensagens de erro
        // } else {
        //     enviarWhatsapp();
        // }
    }
    
function enviarWhatsapp() {
    const numeroWhatsapp = "+5569992974079";

    const apiWhatsapp = "https://wa.me/" + numeroWhatsapp + "?text=" + 
    "*Nome:* "+nome+"%0a" + 
    "*Email:* "+email+"%0a" + 
    "*Mensagem:* "+mensagem+"%0a";
    
    
    window.open(apiWhatsapp, '_blank').focus();
}

    // verificaCampos({ nome, email, mensagem });

    verificaCampos();
    // enviarWhatsapp();
}


