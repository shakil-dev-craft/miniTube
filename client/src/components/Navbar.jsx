import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div className="max-w-7xl mx-auto px-7 lg:px-0 flex justify-between items-center py-3 ">
                <Link to="/" className="text-bold font-medium text-xl">Logo</Link>
                <Link to="/videos/add" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500">+ Add Video</Link>
            </div>
        </nav>
    );
};

export default Navbar;