import { useContext } from 'react';
import Produto from './components/Produto';
import { context } from './context';

function App() {
    const { produto, setProduto } = useContext(context);

    function handleChangeProduct() {
        setProduto({
            ...produto,
            nome: 'Notebook',
            preco: 2000,
            descricao: 'Produto top'
        });
    }

    return (
        <div>
            <button onClick={handleChangeProduct}>Atualizar Produto</button>
            <Produto />
        </div>
    );
}

export default App;
