// Interação Animada: Efeito de clique dinâmico nos títulos das seções ou feedback de envio
const formulario = document.getElementById('form-contato');
const feedback = document.getElementById('feedback-form');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nomeUsuario = document.getElementById('nome').value.trim();

  feedback.textContent = `Obrigado, ${nomeUsuario}! Sua mensagem foi enviada com sucesso.`;
  feedback.className = 'feedback-visivel';

  formulario.reset();
});