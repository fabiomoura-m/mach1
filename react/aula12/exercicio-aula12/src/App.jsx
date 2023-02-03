import { useState } from 'react';
import ClickCounter from './components/ClickCounter';
import InputCounter from './components/InputCounter';
import ProductList from './components/ProductList';

function App() {
    const [products, setProducts] = useState(['Produto 1', 'Produto 2']);

    return (
        <div>
            <InputCounter />
            <ClickCounter />
            <ProductList products={products} />
        </div>
    );
}

export default App;
