import { useState } from "react";

function CreateStory() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    console.log("Button clicked");
    e.preventDefault();

    console.log("Sending request...");
    const response = await fetch(
      "http://localhost:5000/api/posts/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          author: "6a3044e4a2d5ee3631afcaaa",
          category: "story",
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    alert(data.message);

    setTitle("");
    setContent("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Share Your Story 💙
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          className="w-full border p-3 rounded mb-4"
          type="text"
          placeholder="Story Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border p-3 rounded mb-4"
          rows="6"
          placeholder="Write your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded"
          type="submit"
        >
          Post Story
        </button>
      </form>
    </div>
  );
}

export default CreateStory;