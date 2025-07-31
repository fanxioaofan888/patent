checkLogin();
function loadNodes() {
  const tbody = document.getElementById('nodeBody');
  tbody.innerHTML='';
  for (let i=1;i<=5;i++) {
    const tr = document.createElement('tr');
    tr.innerHTML=`
      <td>节点-${i}</td>
      <td>${Math.random()>0.2?'在线':'离线'}</td>
      <td>${(Math.random()*50+10).toFixed(1)} kbps</td>
    `;
    tbody.appendChild(tr);
  }
}

document.addEventListener('DOMContentLoaded', loadNodes);
