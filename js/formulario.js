const formulario = document.querySelector('form');

function formularioEnviado(resposta) {
  if (resposta.ok) {  //valor de (ok) significa se foi enviado ou não
    formulario.innerHTML =
    "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7'><span style='color: #317a00'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";
  } else { 
    formulario.innerHTML =
    "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7'><span style='color: #e00000'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.net</p>";
  }
}

function enviarFormulario(event) {
  //prevenir que vá para o arquivo enviar.php, fica na msm pagina ao enviar.
  event.preventDefault(); 
  const botao = document.querySelector("form button");
  botao.disabled = true; //desabilitar o botao enviar para nao ser clicar mais de uma vez.
  botao.innerText = 'Enviando...'; //muda o texto do botao ao clicar.

  const data = new FormData(formulario); //puxa os dados do formulario, todas as informacoes

  fetch('./enviar.php', {  // conexao com o php
    method: 'POST',
    body: data
  }).then(formularioEnviado);  
  //.then - No momento da conexao com o php, é enviado uma mensagem de sucesso ou nao.
}

formulario.addEventListener('submit', enviarFormulario);