import './Item.css';

export default function Item({ texto, ativo }) {
    return <li className={ativo && 'ativo'}>{texto}</li>;
}
