// small interactions: mobile menu + form submit + year
document.getElementById('year').textContent = new Date().getFullYear();

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger && hamburger.addEventListener('click', () => {
  const isShown = mobileMenu.classList.toggle('show');
  mobileMenu.setAttribute('aria-hidden', !isShown);
});

// basic form submit (local)
function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value || 'Usuário';
  const email = document.getElementById('email').value || '';
  alert(`Obrigado, ${name}! Recebemos sua solicitação. Entraremos em contato pelo e-mail: ${email}`);
  document.getElementById('demoForm').reset();
  return false;
}
