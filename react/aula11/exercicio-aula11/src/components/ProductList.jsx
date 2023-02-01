import { useContext } from 'react';

import { productContext } from '../product-context';

export default function ProductList() {
    const { state } = useContext(productContext);

    return (
        <div>
            Lista de Produtos:
            {state.length !== 0 && state.map(product => <li>{product}</li>)}
        </div>
    );
}
