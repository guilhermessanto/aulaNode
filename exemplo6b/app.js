import  express  from "express";
const app = express();
/* Configurando a view */
app.set('view engine', 'ejs');

/*Configurando as rotas */
app.get('/', (req , res)=>{
    /* res.send('Aplicação funcionando bem até aqui.') */
    const bandas = ['arctic monkeys','djonga','froid','Justin Bieber']
    res.render('paginas/index', {bandas});
    res.render('index',{bandas});
})
app.get('/sobre', (req, res)=>{
    res.render('sobre');
    
})
app.get('/contato', (req, res)=>{
    res.render('contato');
    
})


/*Configurando o Servidor */
app.listen(8080 , ()=>{
    console.log("Servidor express rodando...")
});