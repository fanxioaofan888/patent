function checkLogin() {
  if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'signin.html';
  }
}

function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'signin.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
});
