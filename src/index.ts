import * as express from 'express'
import bussiness from './logic'

let app = express()

app.get('/:time', (req, res) => {
    bussiness.greetings(parseInt(req.params.time)).then((result: string) => {
        res.send(result)
    }, (err: Error) => {
        res.status(500).send(err)
    })
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})

