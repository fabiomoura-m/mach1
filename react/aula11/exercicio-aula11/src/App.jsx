import { useContext } from 'react';
import ProductList from './components/ProductList';
import { productContext } from './product-context';

function App() {
    const { state, dispatch } = useContext(productContext);

    function handleAddProduct() {
        const product = `Produto ${state.length + 1}`;
        
        dispatch({
            type: 'ADICIONAR',
            payload: product
        });
    }

    function handleRemoveProduct() {
        dispatch({
            type: 'REMOVER'
        });
    }
    return (
        <div>
            <button onClick={() => handleAddProduct()}>
                Adicionar Produto
            </button>
            <br />
            <button onClick={() => handleRemoveProduct()}>
                Remover Produto
            </button>
            <ProductList />
        </div>
    );
}

export default App;
