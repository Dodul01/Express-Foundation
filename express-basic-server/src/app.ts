import express, { Request, Response } from 'express'
const app = express()

// Parsers
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    // res.send('got the data')
    res.json({
        'message': 'Data received successfully'
    })
})

export default app;