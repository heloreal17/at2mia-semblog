const { sortBy } = require('async')

module.exports = (app) => {

    var conexao = require('../config/database') 
    
    app.get('/', async(req, res) => {
        conexao()
        var metas = require('../models/metas')
        var documentos = await metas.find().limit().sort({'_id':-1})
        console.log(documentos);

        res.render('index.ejs',{dados:documentos})
    })

    app.post('/', (req, res) => {

        conexao()

        var modelo = require('../models/mensagem')

        var documento = new modelo({
                nome: req.body.first_name,
                sobrenome: req.body.last_name,
                email: req.body.email,
                mensagem: req.body.message
            })
            .save()
            .then(() => {
                res.redirect('/')
            })
            .catch(() => {
                res.send("Não foi possível gravar o documento no Banco de Dados")
            })
    })
    
}
