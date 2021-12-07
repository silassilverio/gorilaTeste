module.exports = app => {
    const calculaCDB = async(req, res) => {
        
        const cdbDados = await app.db('dadosCDB')
            .where({id: req.params.id})
            .first()
            // .then(res.status(200).send())
            // .catch(err => res.status(400).json(err))
        
        investmentDate = cdbDados.investmentDate.toISOString().replace('T02:00:00.000Z', '')
        cdbRate = cdbDados.cdbRate
        currentDate = cdbDados.currentDate.toISOString().replace('T02:00:00.000Z', '')

        const cdiDados = await app.db('taxasCDI')
            .whereBetween('date', [investmentDate, currentDate] )
            .orderBy('date', 'asc')
            // .then(res.status(200).send())
            // .catch(err => res.status(400).json(err))
        
        let tCDI = 1
        const resultArray = []
        cdiDados.forEach(element => {
            CDIk = element.tax
            let tCDIk = Math.pow((CDIk/100)+1, (1/252)) -1
            tCDIk = Number(tCDIk.toPrecision(9))
            tCDI *= 1 + tCDIk*cdbRate/100 
            tCDI = Number(tCDI.toPrecision(17))

            let unitPrice = Number((1000*tCDI).toPrecision(9))
            const data = element.date.toISOString().replace('T02:00:00.000Z', '')
            const result = {"date": data, "UnitPrice": unitPrice}
            resultArray.push(result)
        });
        
        res.send(resultArray)
    }

    return { calculaCDB }
}