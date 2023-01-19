import './ButtonLink.css'

export default function ButtonLink({ text, link }) {
    function handleClick() {
        alert(link);
    }
    return (
        <a href="#" onClick={handleClick} className="link">
            {text}
        </a>
    );
}
