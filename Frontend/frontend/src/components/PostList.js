import React from 'react';

const PostList = ({ posts, onDelete }) => {
    return (
        <div className="list-group">
            {posts.map(p => (
                <div key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <h6>{p.title}</h6>
                        <small className="text-muted">{p.content}</small>
                    </div>
                    <button className="btn btn-sm btn-outline-danger"
                            onClick={() => onDelete(p.id)}>Xóa</button>
                </div>
            ))}
        </div>
    );
};
export default PostList;