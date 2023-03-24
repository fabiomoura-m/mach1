// Importando o framwork
import express from 'express';
// Importando o que eu quero utilizar
import { Router, Request, Response } from 'express';

const app = express();

const route = Router();

app.use(express.json());
// Rota onde a minha API vai responder
route.get('/', (req: Request, res: Response) => {
    let nome = req.query.nome;
    let idade = Number(req.query.idade);
    if (idade >= 18) {
        res.json({ message: `${nome} é maior de idade`, maioridade: true });
    } else {
        res.json({ message: `${nome} é menor de idade`, maioridade: false });
    }
});

route.get('/products', (req: Request, res: Response) => {
    res.json({ name: 'Produto', price: 50 });
});
// Setando uso da rota ou das rotas
app.use(route);
// Startando o servidor
app.listen(8080, () => 'server running port 8080');
