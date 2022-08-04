const focado=document.getElementById('focado')

function recebeFoco(){
  focado.innerText='eitaaaa'
}
function perdeuFoco(){
  let pai=document.body
  let span=document.createElement('span')
  span.innerHTML='Perdeu o foco'
  console.log(span)
  pai.appendChild(span)
  // alert('Perdeu o foco')
}

focado.addEventListener('focus',recebeFoco)
focado.addEventListener('blur',perdeuFoco)
