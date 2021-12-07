module.exports = app => {
    const multer = require('multer')
    const multerconfig = multer()

    app.route('/cdb')
        .post(app.api.cdb.guardaDados)
        .get(app.api.cdb.pegaDadosGeral)

    app.route('/cdb/:id')
        .get(app.api.cdb.pegaDados)
        .delete(app.api.cdb.removeDados)
    
    app.post('/upload', multerconfig.single("file"), app.api.file.importaArquivo)

    app.get('/taxas', app.api.file.pegaTaxa)

    app.get('/calculaPreco/:id', app.api.calculadoraCDB.calculaCDB)
}