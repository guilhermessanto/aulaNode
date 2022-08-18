import express from  "express"; 

const app = express();
/* configurar a view engine com EJS */
app.set('view engine', 'ejs');
app.get('/', (req, res)=>{ 

    /* res.send('teste qualquer') para ver se esta funcionando*/
    const bandas = ['arctic monkeys','djonga','froid','Justin Bieber']
    res.render('paginas/index', {bandas});
    
});
/* executando o servidor */
app.listen(8080, ()=> { console.log('Servidor Rodando...');});

app.get('/sobre', (req, res) => {
    
    res.render('paginas/sobre');
});

app.get('/contato', (req, res) => {
    
    res.render('paginas/contato');
});