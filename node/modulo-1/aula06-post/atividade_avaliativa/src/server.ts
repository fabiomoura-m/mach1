import express from 'express';
import { Router, Request, Response } from 'express';
import { IClient } from './interfaces/client';
import saveDataInJson from './utils/saveDataInJson';
import loadDatabase from './utils/loadDatabase';
import verifyBody from './utils/verifyBody';
import messages from './enums/messages';
import getQuantityClients from './utils/getQuantityClients';

const app = express();
const route = Router();

app.use(express.json());

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

route.get('/clientList', (req: Request, res: Response) => {
    const clients: IClient[] = loadDatabase();
    res.status(200).json(clients);
});

route.post('/clientRegister', (req: Request, res: Response) => {
    const clients: IClient[] = loadDatabase();
    const newClient: IClient = req.body;
    const isCorrectBody = verifyBody(newClient);

    if (isCorrectBody) {
        const existingClient = clients.some(
            client => client.email === newClient.email
        );

        if (existingClient) {
            return res.status(400).json({
                message: `${messages.clientNotSet} O e-mail ${newClient.email} já está cadastrado`
            });
        }

        let quantityClients = getQuantityClients(clients);

        const {
            name,
            age,
            email,
            profile: { type, credit, business },
            ...rest
        }: IClient = req.body;

        const newClientFormatted: IClient = {
            id: `${email}${quantityClients}`,
            name,
            age,
            email,
            profile: { type, credit, business }
        };

        clients.push(newClientFormatted);
        saveDataInJson(clients);

        res.status(200).json({ message: messages.clientRegistrerSuccess });
    } else {
        res.status(404).json({
            message: messages.clientNotSet,
            bodyExpected
        });
    }
});

route.put('/clientUpdate/:id', (req: Request, res: Response) => {
    const clients: IClient[] = loadDatabase();
    const id = req.params.id;
    const body = req.body;
    let clientIndex = clients.findIndex(client => client.id === id);

    // cliente não encontrado
    if (clientIndex === -1) {
        return res.status(404).json({ message: messages.clientNotFind });
    }

    // Verifica se o corpo da requisição contém pelo menos uma propriedade válida
    const validProperties = ['name', 'age', 'email', 'profile'];
    const hasValidProperty = validProperties.some(prop =>
        Object.prototype.hasOwnProperty.call(body, prop)
    );
    if (!hasValidProperty) {
        return res.status(400).json({
            message: messages.clientNotUpdated,
            bodyExpected: bodyExpected
        });
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
        return res.status(200).json({ message: messages.clientUpdatedSuccess });
    } else {
        return res.status(400).json({
            message: messages.clientNotUpdated,
            bodyExpected: bodyExpected
        });
    }
});

route.delete('/clientDelete/:id', (req: Request, res: Response) => {
    const clients: IClient[] = loadDatabase();
    const id = req.params.id;

    let verifyId = clients.find(client => client.id === id);

    if (verifyId) {
        const newArrayClients = clients.filter(client => client.id !== id);

        saveDataInJson(newArrayClients);

        return res.status(200).json({
            message: messages.clientRemoveSuccess
        });
    } else {
        return res.status(400).json({
            message: messages.clientNotFind
        });
    }
});
// Setando uso da rota ou das rotas
app.use(route);
// Startando o servidor
app.listen(8080, () => 'server running port 8080');
