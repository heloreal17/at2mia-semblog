const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect (1mongodb://localhost/AC1')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://useradmin:heloreal17@cluster0.1k2zm.mongodb.net/1trimestre-AT?retryWrites=true&w=majority')
}

module.exports = conexao