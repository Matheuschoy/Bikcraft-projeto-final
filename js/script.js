//------------------ATIVAR LINKS DO MENU
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
  const url = location.href; //local de agora
  const href = link.href;    //todos os links

  if (url.includes(href)) {    
    link.classList.add('ativo'); 
  }
  //se url incluir o que tem no href, vai incluir a classe (.ativo)
}

links.forEach(ativarLink);


//------------------ATIVAR ITENS DO ORCAMENTO
//extrair o parametro do link
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);


//-----------------PERGUNTAS FREQUENTES
const perguntas = document.querySelectorAll('.perguntas button');

// 2º funcao que vai ocorrer ao click
function ativarPergunta(event) {
  const pergunta = event.currentTarget;  //puxar o elemento
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  
  //checando se a resposta tem a classe .ativa / aria-expanded muda conforme a classe
  const ativa = resposta.classList.contains('ativa');  //se contem classe .ativa
  pergunta.setAttribute('aria-expanded', ativa);
}

// 1º lista de botoes, para o click, 
//Ao clicar ativa a funcao = ativarPergunta
function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}

//evento de click
perguntas.forEach(eventosPerguntas)


//-----------------GALERIA DE BICICLETAS
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  //media query para desativar troca de imagem a baixo de 1000px 
  //se media for abaixo de 1000px não ativa a troca de imagens
  if (media) { 
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria); //evento de click para cada item da galeria


//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}