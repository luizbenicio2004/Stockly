// EmailJS config - insira sua user ID aqui
(function() {
  emailjs.init('SEU_USER_ID_AQUI'); 
})();

// Animação fade-in ao scroll
const fadeElems = document.querySelectorAll('.fade-in');

function handleScrollFade() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElems.forEach(elem => {
    const top = elem.getBoundingClientRect().top;
    if (top < triggerBottom) {
      elem.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollFade);
window.addEventListener('load', () => {
  handleScrollFade();

  // Header background muda ao scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

// Envio de formulário com EmailJS
function enviarFormulario(event) {
  event.preventDefault();

  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (!form.checkValidity()) {
    feedback.textContent = 'Por favor, preencha todos os campos corretamente.';
    feedback.style.color = 'red';
    return;
  }

  const formData = new FormData(form);

  emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', {
    from_name: formData.get('from_name'),
    from_email: formData.get('from_email'),
    message: formData.get('message')
  })
  .then(() => {
    feedback.textContent = 'Mensagem enviada com sucesso! Obrigado.';
    feedback.style.color = '#0074D9';
    form.reset();
  })
  .catch(() => {
    feedback.textContent = 'Erro ao enviar a mensagem. Tente novamente mais tarde.';
    feedback.style.color = 'red';
  });
}
