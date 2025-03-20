import express, { Request, Response } from 'express';
import cors from 'cors';

const PORT = 3000;

const app = express();
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json({
        success: true,
        message: 'Hello, World!'
    });
});

app.listen(PORT, () => console.log(`Testapp started at port ${PORT}`));