function enviarFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome && email && mensagem) {
    alert("Mensagem enviada com sucesso! Obrigado, " + nome + ".");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
