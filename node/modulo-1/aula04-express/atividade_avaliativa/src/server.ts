import express from 'express';

import { Router, Request, Response } from 'express';

const app = express();
const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    res.json([
        {
            titulo: 'JSON x XML',
            resumo: 'o duelo de dois modelos de representação de informações',
            ano: 2012,
            genero: ['aventura', 'ação', 'ficção']
        },
        {
            titulo: 'JSON James',
            resumo: 'a história de uma lenda do velho oeste',
            ano: '2012',
            genero: ['western']
        }
    ]);
});

route.get('/notebook', (req: Request, res: Response) => {
    res.json({
        name: 'Notebook Dell G5',
        price: 4000
    });
});

route.get('/products', (req: Request, res: Response) => {
    res.json([{ name: 'Tablet' }, { name: 'Iphone X' }, { name: 'Notebook' }]);
});

app.use(route);

app.listen(8080, () => 'server running port 8080');
