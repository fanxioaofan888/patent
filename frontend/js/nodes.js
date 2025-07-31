checkLogin();
function loadNodes() {
  const tbody = document.getElementById('nodeBody');
  tbody.innerHTML='';
  for (let i=1;i<=5;i++) {
    const tr = document.createElement('tr');
    tr.innerHTML=`
      <td>Node-${i}</td>
      <td>${Math.random()>0.2?'Online':'Offline'}</td>
      <td>${(Math.random()*50+10).toFixed(1)} kbps</td>
    `;
    tbody.appendChild(tr);
  }
}

document.addEventListener('DOMContentLoaded', loadNodes);
