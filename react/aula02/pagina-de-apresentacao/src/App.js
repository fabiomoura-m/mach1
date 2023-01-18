import Header from './components/Header';
import Lista from './components/Lista';
import Post from './components/Post';

function App() {
    return (
        <div>
            <Header />
            <Post />
            <Lista textos={['home', 'sobre', 'contato']} />
        </div>
    );
}

export default App;
