checkLogin();
function loadEvents() {
  const tbody = document.getElementById('eventBody');
  tbody.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${new Date().toLocaleString()}</td>
      <td>${(Math.random()*100+300).toFixed(2)}</td>
      <td>${(Math.random()*50).toFixed(2)}</td>
      <td>${(Math.random()*5).toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  }
}

document.addEventListener('DOMContentLoaded', loadEvents);
