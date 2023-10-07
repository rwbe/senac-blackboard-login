const username = document.querySelector('input[type="text"]');
const password = document.querySelector('input[type="password"]');
const submitButton = document.querySelector('input[type="submit"]');
const loginInstructions = document.querySelector('.login-instructions');
const errorMessage = document.querySelector('.error-message'); 

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  // Limpa a mensagem de erro anterior, se houver
  errorMessage.innerHTML = '';
  errorMessage.style.display = 'none'; // Oculta a mensagem de erro

  // Validação do campo de usuário e senha
  if (username.value.trim() === '' && password.value.trim() === '') {
    // Exibe um alerta se ambos os campos estiverem vazios
    alert('Inserir um nome do usuário e senha.');
    return;
  }

  if (username.value !== 'usuario_incorreto' || password.value !== 'senha_incorreta') {
    errorMessage.innerHTML = 'O nome de usuário ou a senha inserida está incorreta. Tente novamente. Se você não conseguir fazer logon, entre em contato com o administrador do sistema.';
    errorMessage.style.display = 'block'; // Exibe a mensagem de erro
    return;
  }
});
