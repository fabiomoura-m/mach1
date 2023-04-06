import fs from 'fs';
import { IProduct } from '../interfaces/product';

const dataproductsPath = './database/products.json';

function saveDataInJson(products: IProduct[]) {
    const productsString = JSON.stringify(products);
    return fs.writeFileSync(dataproductsPath, productsString);
}

export default saveDataInJson;
