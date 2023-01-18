import Item from './Item';

export default function Lista({ textos }) {
    return (
        <ul>
            {textos.map(texto => (
                <Item ativo texto={texto} />
            ))}
        </ul>
    );
}
