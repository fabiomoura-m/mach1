import fs from 'fs';

const dataProductsPath = './database/products.json';

function loadDatabase() {
    const fileBuffer = fs.readFileSync(dataProductsPath, 'utf-8');
    const contentJson = JSON.parse(fileBuffer);
    return contentJson;
}

export default loadDatabase;
