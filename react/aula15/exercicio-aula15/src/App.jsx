import { useEffect, useState } from 'react';
import Posts from './components/Posts';
import UserProfile from './components/UserProfile';
import getPosts from './services/post.service';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const posts = await getPosts();
            setData(posts);
        };
        fetchData();
    }, []);

    return (
        <div>
            {/* <Posts items={data} /> */}
            <UserProfile userId={2}/>
        </div>
    );
}

export default App;
