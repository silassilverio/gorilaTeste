module.exports = app => {
  
    const guardaDados = (req, res) => {
        if (!req.body.investmentDate || !req.body.cdbRate || !req.body.currentDate){
            return res.status(400).send('Dados incompletos')
        }
        app.db('dadosCDB')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const pegaDadosGeral = (req, res) => {
        app.db('dadosCDB')
            .then(dados => res.json(dados))
            .catch(err => res.status(400).json(err))
    }

    const pegaDados = (req, res) => {
        app.db('dadosCDB')
            .where({id: req.params.id})
            .then(dados => res.json(dados))
    }

    const removeDados = (req, res) => {
        app.db('dadosCDB')
            .where({id: req.params.id})
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0){
                    res.status(204).send()
                }else {
                    const msg = `Não foi encontrado o id ${req.params.id}.`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).json(err))
    }

    return { guardaDados, pegaDadosGeral, pegaDados, removeDados }
}