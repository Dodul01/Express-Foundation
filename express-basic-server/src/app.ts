import express, { NextFunction, Request, Response } from 'express'
const app = express()

// Parsers
app.use(express.json())
app.use(express.text())


// Routing in express
const userRouter = express.Router();
const courseRouter = express.Router();

app.use('/api/v1/users', userRouter)
app.use('/api/v1/courses', courseRouter)

userRouter.post('/create-user', async (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);
    res.json({
        sucess: true,
        message: 'user created sucessfully.',
        data: user
    })
})

courseRouter.post('/create-course', async (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);
    res.json({
        sucess: true,
        message: 'course created sucessfully.',
        data: course
    })
})

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next();
}

app.get('/', logger, async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send('Hello World')
        // res.send(something)
    } catch (error) {
        console.log(error);
        // res.status(400).json({ message: 'something went wrong.' })
        next(error)
    }
})

//req param
// app.get('/:userId/:subId', (req: Request, res: Response) => {
//     console.log(req.params);

//     res.send('Hello World')
// })

// query params 
app.get('/users', logger, async (req: Request, res: Response) => {
    console.log(req.query);
    res.json({
        'message': 'Users api hit sucessfully.',
        'email': `you query email ${req.query.email}`
    })
})

app.post('/', logger, (req: Request, res: Response) => {
    console.log(req.body)
    // res.send('got the data')
    res.json({
        'message': 'Data received successfully'
    })
})

app.all('*', (req: Request, res: Response) => {
    res.status(400).json({
        sucess: false,
        message: 'Have a relax ha ha something went wong.'
    })
})


// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    if (error) {
        res.status(400).json({ sucess: false, message: 'something went wrong.' })
    }
})

export default app;