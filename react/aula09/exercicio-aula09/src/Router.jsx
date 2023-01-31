import { Routes, Route } from 'react-router-dom';
import MyComponent from './MyComponent/MyComponent';
import Post from './Post';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<MyComponent />} />
            <Route path="/posts" element={<MyComponent />} />
            <Route path="/posts/:id" element={<Post />} />
        </Routes>
    );
}

export default Router;
