import React from 'react';
import { useParams } from 'react-router-dom';
import './Blog.scss';

const blogPosts = [
  // Same array as in Blog.js
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post-page">
      <div className="post-header">
        <h1>{post.title}</h1>
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost; 