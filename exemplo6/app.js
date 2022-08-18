import express from  "express"; 

const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res)=>{ 
    /* res.send('teste qualquer') para ver se esta funcionando*/
    res.render('paginas/index');
    
});
/* executando o servidor */
app.listen(8080, ()=> { console.log('Servidor Rodando...');});

app.get('/sobre', (req, res) => {
    
    res.render('paginas/sobre');
});

app.get('/contato', (req, res) => {
    
    res.render('paginas/contato');
});