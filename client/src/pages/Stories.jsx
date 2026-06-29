import { useEffect, useState } from "react";

function Stories() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Community Stories 
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">
            No stories avilable yet.
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-lg rounded-xl p-6"
            >
              <h2 className="text-2xl font-semibold text-blue-600">
                {post.title}
              </h2>

              <p className="text-gray-700 mt-3">{post.content}</p>

              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>✍️ {post.author?.name}</span>
                <span>📖 {post.category}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Stories;