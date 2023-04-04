import express from 'express';
import bodyParser from 'body-parser';
import { Router, Request, Response } from 'express';
import { IClient } from './interfaces/client';
import getLastId from './utils/getLastId';
import saveDataInJson from './utils/saveDataInJson';
import loadDatabase from './utils/loadDatabase';
import verifyBody from './utils/verifyBody';

const app = express();
const route = Router();

app.use(bodyParser.json());

const clients: IClient[] = loadDatabase();

const bodyExpected = {
    name: 'string',
    age: 'number',
    email: 'string',
    profile: {
        type: 'string',
        credit: 'number',
        business: 'boolean'
    }
};

route.get('/', (req: Request, res: Response) => {
    res.json(clients);
});

route.post('/clientRegister', (req: Request, res: Response) => {
    const newClient: IClient = req.body;
    const isCorrectBody = verifyBody(newClient);

    if (isCorrectBody) {
        const existingClient = clients.some(
            client => client.email === newClient.email
        );

        if (existingClient) {
            return res.status(400).json({
                mensagem: `O e-mail ${newClient.email} já está cadastrado`
            });
        }

        let lastID = getLastId(newClient) ? getLastId(newClient) : 1;

        const {
            name,
            age,
            email,
            profile: { type, credit, business },
            ...rest
        }: IClient = req.body;

        const newClientFormatted: IClient = {
            name,
            age,
            email,
            profile: { type, credit, business },
            id: `${email}${lastID}`
        };

        clients.push(newClientFormatted);
        saveDataInJson(clients);

        res.json('Cliente Cadastrado com sucesso');
    } else {
        res.json({
            message: 'Cliente não cadastrado, dados inválidos.',
            bodyExpected
        });
    }
});

route.put('/clientUpdate/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    let clientIndex = clients.findIndex(client => client.id === id);

    // cliente não encontrado
    if (clientIndex === -1) {
        return res
            .status(404)
            .json({ message: `Cliente com ID ${id} não encontrado.` });
    }

    // Verifica se o corpo da requisição contém pelo menos uma propriedade válida
    const validProperties = ['name', 'age', 'email', 'profile'];
    const hasValidProperty = validProperties.some(prop =>
        Object.prototype.hasOwnProperty.call(body, prop)
    );
    if (!hasValidProperty) {
        return res.status(400).json({ error: 'Corpo da requisição inválido' });
    }

    const currentClient = clients[clientIndex];
    const { name, age, email, profile } = req.body as Partial<IClient>; // usa Partial para permitir campos opcionais
    const updatedClient: IClient = {
        id,
        name: name ?? currentClient.name, // substitui somente se foi passado no corpo da requisição, senão mantém o valor original
        age: age ?? currentClient.age,
        email: email ?? currentClient.email,
        profile: {
            type: profile?.type ?? currentClient.profile.type,
            credit: profile?.credit ?? currentClient.profile.credit,
            business: profile?.business ?? currentClient.profile.business
        }
    };
    const isvalidUpdatedClient = verifyBody(updatedClient); // verifica se o cliente atualizado está com a tipagem correta
    if (isvalidUpdatedClient) {
        clients[clientIndex] = updatedClient; // substitui o cliente original pelo atualizado
        saveDataInJson(clients);
        return res
            .status(200)
            .json({ message: 'Cliente atualizado com sucesso' });
    } else {
        return res
            .status(400)
            .json({
                message:
                    'Dados incorretos para atualizar, verifique o tipo passado.'
            });
    }
});

route.delete('/clientDelete/:id', (req: Request, res: Response) => {
    const id = req.params.id;

    let verifyId = clients.find(client => client.id === id);

    if (verifyId) {
        const newArrayClients = clients.filter(client => client.id !== id);

        saveDataInJson(newArrayClients);

        res.json({
            message: 'Cliente removido com sucesso'
        });
    } else {
        res.json({
            message: 'Cliente não encontrado'
        });
    }
});
// Setando uso da rota ou das rotas
app.use(route);
// Startando o servidor
app.listen(8080, () => 'server running port 8080');
