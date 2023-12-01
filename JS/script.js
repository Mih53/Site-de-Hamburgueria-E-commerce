function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

    document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Validação dos campos
    var nome = document.getElementById('fname').value.trim();
    var number = document.getElementById('tel').value.trim();
    var email = document.getElementById('lemail').value.trim();
    var textarea = document.getElementById('textarea').value.trim();

    if (nome === ''  || number === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

 // Simulação do envio bem-sucedido
 document.getElementById('meuFormulario').style.display = 'none'; // Esconde o formulário
 document.getElementById('mensagemSucesso').style.display = 'block'; // Mostra a mensagem de sucesso
});

// Função para validar o formato do email
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
