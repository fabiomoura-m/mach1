import { useMemo } from 'react';

export default function ProductList({ products }) {
    const listProducts = useMemo(() => products, [products]);

    return (
        <div>
            <ul>
                {listProducts.map(product => (
                    <li key={product}>{product}</li>
                ))}
            </ul>
        </div>
    );
}
