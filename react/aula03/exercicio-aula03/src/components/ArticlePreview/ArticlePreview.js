import ButtonLink from '../ButtonLink/ButtonLink';
import './ArticlePreview.css';
export default function ArticlePreview({ img, title, description, link }) {
    return (
        <div className="wrapper">
            <img src={img} />
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
                <ButtonLink text={link} link="" />
            </div>
        </div>
    );
}
