
module.exports = app => {
    const { Readable } = require('stream')
    const readline = require('readline')

    const importaArquivo = async(req, res) => {
        const { file } = req
        const { buffer } = file

        const readableFile = new Readable()
        readableFile.push(buffer)
        readableFile.push(null)

        const fileLine = readline.createInterface({
            input: readableFile
        })
        
        for await(let line of fileLine){
            const fileLineSplit = line.split(",")
            app.db('taxasCDI')
                .insert({type: fileLineSplit[0], date: fileLineSplit[1], tax: fileLineSplit[2]})
                .then(_ => res.status(200).send())
                .catch(err => res.status(400).send())
        }

        res.send()
    }

    const pegaTaxa = (req, res) => {
        app.db('taxasCDI')
            .then(taxa => res.json(taxa))
            .catch(err => res.status(400).json(err))
    }

    return { importaArquivo, pegaTaxa}
}