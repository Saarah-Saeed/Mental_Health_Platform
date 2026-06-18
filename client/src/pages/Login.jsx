import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    alert(data.message);

    if (data.token) {
      localStorage.setItem("token", data.token);
    }

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Login 🔐
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          className="w-full border p-3 rounded mb-4"
          type="email"
         
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded mb-4"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;