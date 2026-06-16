import { useEffect, useState } from "react";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-blue-50">
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          Welcome to MindSpace 🌿
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A safe space to share stories, connect with others, and take care of
          your mental well-being.
        </p>

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Share Your Story
        </button>
      </section>

      <section className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Backend Status 🚀
          </h2>

          <p className="text-green-600 font-medium">{message}</p>
        </div>
      </section>
    </div>
  );
}

export default Home;