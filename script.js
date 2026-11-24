// Interação 1: Alternar Tema Claro / Escuro
const botaoTema = document.getElementById('btn-tema');

botaoTema.addEventListener('click', () => {
  document.body.classList.toggle('tema-escuro');
  const escuroAtivo = document.body.classList.contains('tema-escuro');
  botaoTema.textContent = escuroAtivo ? '☀️ Claro' : '🌙 Escuro';
});

// Interação 2: Mensagem de confirmação no formulário de contato
const formulario = document.getElementById('form-contato');
const feedback = document.getElementById('feedback-form');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nomeUsuario = document.getElementById('nome').value.trim();

  feedback.textContent = `Obrigado, ${nomeUsuario}! Sua mensagem foi registrada com sucesso.`;
  feedback.className = 'feedback-visivel';

  formulario.reset();
});