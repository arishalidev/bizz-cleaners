import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

interface HelloResponse {
    message: string;
}

app.get('/api/hello', (req: Request, res: Response<HelloResponse>) => {
    res.json({ message: 'Hello from the TypeScript server!' });
});

app.listen(3000, () => console.log('Server on http://localhost:3000'));