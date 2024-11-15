"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// Routing in express
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);
userRouter.post('/create-user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    console.log(user);
    res.json({
        sucess: true,
        message: 'user created sucessfully.',
        data: user
    });
}));
courseRouter.post('/create-course', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const course = req.body;
    console.log(course);
    res.json({
        sucess: true,
        message: 'course created sucessfully.',
        data: course
    });
}));
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get('/', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('Hello World');
        // res.send(something)
    }
    catch (error) {
        console.log(error);
        // res.status(400).json({ message: 'something went wrong.' })
        next(error);
    }
}));
//req param
// app.get('/:userId/:subId', (req: Request, res: Response) => {
//     console.log(req.params);
//     res.send('Hello World')
// })
// query params 
app.get('/users', logger, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    res.json({
        'message': 'Users api hit sucessfully.',
        'email': `you query email ${req.query.email}`
    });
}));
app.post('/', logger, (req, res) => {
    console.log(req.body);
    // res.send('got the data')
    res.json({
        'message': 'Data received successfully'
    });
});
app.all('*', (req, res) => {
    res.status(400).json({
        sucess: false,
        message: 'Have a relax ha ha something went wong.'
    });
});
// global error handler
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).json({ sucess: false, message: 'something went wrong.' });
    }
});
exports.default = app;
