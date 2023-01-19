import ArticlePreview from './components/ArticlePreview/ArticlePreview';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
    return (
        <div>
            <MainHeader link1="home" link2="sobre" link3="contato" />
            <div className="articles">
                <ArticlePreview
                    img={'./photo.jpg'}
                    title="My Title"
                    description="lorem sumemr dummer dlsdsds"
                    link="Leia mais..."
                />
                <ArticlePreview
                    img={'./photo.jpg'}
                    title="My Title"
                    description="lorem sumemr dummer dlsdsds"
                    link="Leia mais..."
                />
                <ArticlePreview
                    img={'./photo.jpg'}
                    title="My Title"
                    description="lorem sumemr dummer dlsdsds"
                    link="Leia mais..."
                />
            </div>
        </div>
    );
}

export default App;
