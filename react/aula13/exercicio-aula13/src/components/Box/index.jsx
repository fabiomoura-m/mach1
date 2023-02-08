import useToggle from '../../hooks/useToggle';
import './style.css';

export default function Box() {
    const { active, toggle } = useToggle();
    return (
        <div className={active ? 'box blue' : 'box red'}>
            <button onClick={() => toggle()}>Clique aqui</button>
        </div>
    );
}
