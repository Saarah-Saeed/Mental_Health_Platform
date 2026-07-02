import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">MindSpace 🌿</h1>

     <div className="space-x-6">
      <Link className="text-gray-700 hover:text-blue-500" to="/">Home</Link>
      <Link className="text-gray-700 hover:text-blue-500" to="/community">Community</Link>
      <Link className="text-gray-700 hover:text-blue-500" to="/book">Book</Link>
      <Link className="text-gray-700 hover:text-blue-500" to="/stories">Stories</Link>
      <Link className="text-gray-700 hover:text-blue-500" to="/create-story">
       Create 
       </Link>
       <Link className="text-gray-700 hover:text-blue-500" to="/login">
  Login
</Link>
     </div>
    </nav>
  );
}

export default Navbar;