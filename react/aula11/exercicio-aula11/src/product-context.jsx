import { useReducer } from 'react';
import { createContext } from 'react';
import ProductReducer, { initialStateProdutos } from './product-reducer';

export const productContext = createContext(initialStateProdutos);

function ProductProvider({ children }) {
    const [state, dispatch] = useReducer(ProductReducer, initialStateProdutos);

    return (
        <productContext.Provider value={{ state, dispatch }}>
            {children}
        </productContext.Provider>
    );
}

export default ProductProvider;
