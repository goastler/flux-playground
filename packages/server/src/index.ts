import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT || 3000);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/info', (req: Request, res: Response) => {
    fetch('https://api.ipify.org').then(res => res.text()).then(serverIp => {
        const info = {
            clientIp: req.ip,
            serverIp
        }
        res.send(info);
    }).catch(err => {
        res.status(500).send(err);
    });
});

const listener = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

process.on('SIGINT', () => {
    console.log('Bye bye!');
    listener.close();
    process.exit();
});