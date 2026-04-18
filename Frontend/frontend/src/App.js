import React, { useEffect, useState } from 'react';
import { getPosts, createPost, deletePost } from './api/api';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const res = await getPosts();
        setPosts(res.data);
    };

    const handleAdd = async (newPost) => {
        await createPost(newPost);
        loadPosts();
    };

    const handleDelete = async (id) => {
        if(window.confirm("Bạn có chắc chắn muốn xóa?")) {
            await deletePost(id);
            loadPosts();
        }
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Hệ thống CMS Layered</h1>
            <div className="row">
                <div className="col-md-4">
                    <PostForm onAdd={handleAdd} />
                </div>
                <div className="col-md-8">
                    <PostList posts={posts} onDelete={handleDelete} />
                </div>
            </div>
        </div>
    );
}
export default App;