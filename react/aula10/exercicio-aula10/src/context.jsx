import { createContext, useState } from 'react';

export const context = createContext({});

export default function ContextProvider({ children }) {
    const [produto, setProduto] = useState({
        nome: '',
        preco: 0,
        descricao: 'sem descricao'
    });

    return (
        <context.Provider value={{ produto, setProduto }}>
            {children}
        </context.Provider>
    );
}
