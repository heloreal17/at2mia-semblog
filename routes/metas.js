module.exports = (app)=>{
    //importar a configuração do database
    var conexao = require('../config/database')
    //executar a conexao 
    conexao()
    //importar o modelo metas
    var metas = require('../models/metas')

    //abrir o formulario 
    app.get('/metas',async(req,res)=>{
        var resultado = await metas.find()
        res.render('metas.ejs',{dados:resultado})
        //console.log(resultado)
    })

    //gravar as informações do formulario no banco de dados
    app.post('/metas',(req,res)=>{
        var documento = new metas({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save()
        .then(()=>{res.redirect('/metas')})
        .catch(()=>{res.send('Não foi possível gravar')})
    })
}