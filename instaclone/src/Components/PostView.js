import React, { useState, useEffect } from 'react';

const PostView = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from local JSON or API
    setPosts([
      {
        name: 'Siva',
        location: 'Bengaluru',
        likes: 64,
        description: 'Kick start your career',
        postImage: 'path/to/image.jpg',
        date: new Date(),
      },
      // Add more posts as needed
    ]);
  }, []);

  return (
    <div>
      <h2>Post View</h2>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.name}</h3>
            <p>{post.location}</p>
            <p>{post.likes} Likes</p>
            <p>{post.description}</p>
            <img src={post.postImage} alt={post.name} />
            <p>{post.date.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostView;