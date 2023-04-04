import fs from 'fs';

const dataStudentsPath = './database/clients.json';

function loadDatabase() {
    const fileBuffer = fs.readFileSync(dataStudentsPath, 'utf-8');
    const contentJson = JSON.parse(fileBuffer);
    return contentJson;
}

export default loadDatabase;
