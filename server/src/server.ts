import express, { Request, Response } from 'express';

const app = express();

app.get('/games', (req: Request, res: Response) => {
  res.send('games!');
});

app.post('/games', (req: Request, res: Response) => {
  res.send('post games!');
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(3333, () => {
  console.log('SERVER RUNNING');
});
