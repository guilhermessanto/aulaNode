import http from 'http';
import fs from 'fs/promises'; //js assíncrono (operações independentes) FS = File System
const monitorRequisicao = (requisicao,resposta) => {
    resposta.writeHead(200,{"content-type":"text/html; charset=utf8"});
    switch(requisicao.url){
        case '/' : fs.readFile("paginas/index.html").then(conteudo => resposta.end(conteudo));
        break;
        case '/sobre' : fs.readFile("paginas/sobre.html").then(conteudo => resposta.end(conteudo));
        break;
        default:
        resposta.writeHead(404);    
        fs.readFile("paginas/404.html").then(conteudo => resposta.end(conteudo));
        break;
    }
} 
/*criando um servidor baseado no módulo http que importamos e monitorando ele  */
const servidor = http.createServer(monitorRequisicao);
/* iniciando servidor */
servidor.listen(8080, () => { console.log("servidor rodando")});