const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
  const url = location.href //local de agora
  const href = link.href    //todos os links

  if (url.includes(href)) {    
    link.classList.add('ativo'); 
  }
  //se url incluir o que tem no hrer, vai incluir a classe (.ativo)
}

links.forEach(ativarLink)