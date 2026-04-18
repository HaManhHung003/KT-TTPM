import React, { useState } from 'react';

const PostForm = ({ onAdd }) => {
    const [post, setPost] = useState({ title: '', content: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (post.title && post.content) {
            onAdd(post);
            setPost({ title: '', content: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="card card-body mb-4">
            <h5>Thêm bài viết mới</h5>
            <input className="form-control mb-2" placeholder="Tiêu đề"
                   onChange={e => setPost({...post, title: e.target.value})} value={post.title} />
            <textarea className="form-control mb-2" placeholder="Nội dung"
                      onChange={e => setPost({...post, content: e.target.value})} value={post.content} />
            <button type="submit" className="btn btn-success">Lưu bài viết</button>
        </form>
    );
};
export default PostForm;