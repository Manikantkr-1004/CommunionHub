import { Link } from "react-router-dom";

export function Navbar() {


    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">CommunionHub</h1>
            <div className="text-blue-100">
                <Link className="mr-4" to="/">Home</Link>
                <Link to="/events">Events</Link>
            </div>
        </nav>
    )
}
