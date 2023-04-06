export interface IProduct {
    id: number;
    productName: string;
    productDescription: string;
    productCategory: string;
    productCost: number;
    productTags: Array<string>;
    productRelated: Array<number>;
}
