import express, { Request, Response } from 'express';
const DEFAULT_PORT = 3000;
const port = process.env.PORT ? parseInt(process.env.PORT) : DEFAULT_PORT;

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json({ response: 'Hello World!' });
    // res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});