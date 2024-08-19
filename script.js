// script.js

document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset(); // Limpa o formulário
});


const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})