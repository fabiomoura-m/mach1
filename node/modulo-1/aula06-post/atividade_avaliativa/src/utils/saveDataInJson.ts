import { IClient } from '../interfaces/client';
import fs from 'fs';

const dataClientsPath = './database/clients.json';

function saveDataInJson(clients: IClient[]) {
    const clientsString = JSON.stringify(clients);
    return fs.writeFileSync(dataClientsPath, clientsString);
}

export default saveDataInJson;
