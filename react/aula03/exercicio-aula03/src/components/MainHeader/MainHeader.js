import ButtonLink from '../ButtonLink/ButtonLink';
import Title from '../Title/Title';
import './MainHeader.css';

export default function MainHeader({ link1, link2, link3 }) {
    return (
        <header className="headerContainer">
            <Title />
            <div className="navbar">
                <ButtonLink text={link1} link={'https://google.com'} />
                <ButtonLink text={link2} link={'https://facebook.com'} />
                <ButtonLink text={link3} link={'https://globo.com'} />
            </div>
        </header>
    );
}
