checkLogin();
function savePreferences(evt) {
  evt.preventDefault();
  const interval = document.getElementById('refreshInterval').value;
  const theme = document.getElementById('themeSelect').value;
  localStorage.setItem('refreshInterval', interval);
  localStorage.setItem('theme', theme);
  alert('Preferences saved');
}

function loadPreferences() {
  document.getElementById('refreshInterval').value = localStorage.getItem('refreshInterval') || 1000;
  document.getElementById('themeSelect').value = localStorage.getItem('theme') || 'light';
}

document.addEventListener('DOMContentLoaded', () => {
  loadPreferences();
  document.getElementById('prefForm').addEventListener('submit', savePreferences);
});
