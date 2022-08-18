import fetch from 'node-fetch';

const url = "https://viacep.com.br/ws/08081642/json/";

/* conectando com o endpoint da API (url) */

/* retornar resposta como JSON */
/* exibir resposta (obtida na api)no console */
fetch(url).then(resposta=> resposta.json()).then(dados=> console.log(dados));
