import express from  "express"; 

const app = express();
app.get('/', (req, res)=>{ 
    res.send('Eu vou ganhar na mega');
    
});
/* executando o servidor */
app.listen(8080, ()=> { console.log('Servidor Rodando...');});

app.get('/sobre', (req, res) => {
    
    res.send('Sobre');
});