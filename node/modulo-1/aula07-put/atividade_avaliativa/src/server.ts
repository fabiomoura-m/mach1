import express from 'express';
import { Router, Request, Response } from 'express';
import { IProduct } from './interfaces/product';
import loadDatabase from './utils/loadDatabase';
import Joi from 'joi';
import saveDataInJson from './utils/saveDataInJson';
import getLastId from './utils/getLastId';

const app = express();
const route = Router();

app.use(express.json());

const productSchema = Joi.object({
    productName: Joi.string().required(),
    productDescription: Joi.string().required(),
    productCategory: Joi.string().required(),
    productCost: Joi.number().required(),
    productTags: Joi.array().items(Joi.string()).required(),
    productRelated: Joi.array().items(Joi.number()).required()
});

const productSchemaUpdate = Joi.object({
    id: Joi.number(),
    productName: Joi.string(),
    productDescription: Joi.string(),
    productCategory: Joi.string(),
    productCost: Joi.number(),
    productTags: Joi.array().items(Joi.string()),
    productRelated: Joi.array().items(Joi.number())
});

route.get('/productList', (req: Request, res: Response) => {
    const products: IProduct[] = loadDatabase();

    res.json(products);
});

route.get('/product/:id', (req: Request, res: Response) => {
    const products: IProduct[] = loadDatabase();
    const id = Number(req.params.id);

    const findProduct = products.find(product => product.id === id);

    if (findProduct) {
        return res.status(200).json(findProduct);
    }

    return res.json({ message: 'Produto não encontrado' });
});

route.post('/productRegister', (req: Request, res: Response) => {
    const products: IProduct[] = loadDatabase();
    const newProduct: IProduct = req.body;

    const { error, value } = productSchema.validate(newProduct);
    if (error) {
        return res.status(400).json({ message: 'Body inválido' });
    }

    const lastId = getLastId(products);
    const productRelatedIds = newProduct.productRelated;

    for (let id of productRelatedIds) {
        const product = products.find(item => item.id === id);
        if (!product) {
            return res
                .status(400)
                .json({ message: `Produto com id relacionado inválido ${id}` });
        }
    }

    const productTest = {
        ...newProduct,
        id: lastId
    };
    products.push(productTest);

    saveDataInJson(products);

    res.status(200).json({ message: 'Produto Cadastrado com sucesso!' });
});

route.put('/productUpdate/:id', (req: Request, res: Response) => {
    const products: IProduct[] = loadDatabase();
    const id = Number(req.params.id);
    const body = req.body;
    let productIndex = products.findIndex(product => product.id === id);

    // produto não encontrado
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Produto não encontrado' });
    }

    const validProperties = [
        'productName',
        'productDescription',
        'productCategory',
        'productTags',
        'productCost',
        'productRelated'
    ];
    const hasValidProperty = validProperties.some(prop =>
        Object.prototype.hasOwnProperty.call(body, prop)
    );
    if (!hasValidProperty) {
        return res.status(400).json({
            message: 'Body inválido',
            bodyExpected: ''
        });
    }

    const currentProduct = products[productIndex];

    const {
        productName,
        productDescription,
        productCategory,
        productTags,
        productCost,
        productRelated
    } = req.body as Partial<IProduct>; // usa Partial para permitir campos opcionais

    const updatedProduct: IProduct = {
        id,
        productName: productName ?? currentProduct.productName, // substitui somente se foi passado no corpo da requisição, senão mantém o valor original
        productDescription:
            productDescription ?? currentProduct.productDescription,
        productCategory: productCategory ?? currentProduct.productCategory,
        productTags: productTags ?? currentProduct.productTags,
        productCost: productCost ?? currentProduct.productCost,
        productRelated: productRelated ?? currentProduct.productRelated
    };
    const { error, value } = productSchemaUpdate.validate(updatedProduct);
    console.log(error);
    if (error) {
        return res.status(400).json({
            message: 'Cliente não atualizado',
            bodyExpected: ''
        });
    }

    products[productIndex] = updatedProduct; // substitui o cliente original pelo atualizado
    saveDataInJson(products);
    return res.status(200).json({ message: 'Cliente atualizado com sucesso' });
});

app.use(route);

app.listen(8080, () => 'server running port 8080');
