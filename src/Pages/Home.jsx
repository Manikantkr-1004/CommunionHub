import { useNavigate } from "react-router-dom";

export function Home() {

    const navigate = useNavigate();

    return (
        <div className="text-center py-10 lg:py-20 px-3 bg-gray-100 min-h-screen">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">Connecting People Across Faiths & Interests</h1>
            <p className="text-base lg:text-lg mb-6">Join events, meet new people, and grow together. Our platform helps individuals find, organize, and participate in meaningful events that strengthen community bonds.</p>
            <p className="text-base lg:text-lg mb-6">Whether you are looking for a social gathering, a charity event, or a religious meet-up, we have something for you. Let's come together and make a difference.</p>
            <button
                className="bg-blue-600 text-white m-auto px-6 py-2 rounded cursor-pointer"
                onClick={() => navigate("/events")}
            >
                Explore Events
            </button>
        </div>
    );
}
