import { useEffect, useState } from "react";

export function Events() {

    const defaultEvents = [
        { title: "Community Meetup", date: "2025-03-15", location: "Delhi", category: "Social" },
        { title: "Charity Drive", date: "2025-03-20", location: "Mumbai", category: "Charity" },
        { title: "Interfaith Dialogue", date: "2025-03-25", location: "Bangalore", category: "Religious" },
    ];

    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", category: "" });
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const savedEvents = JSON.parse(localStorage.getItem("events")) || defaultEvents;
        setEvents(savedEvents);
    }, []);

    const addEvent = (e) => {
        e.preventDefault();
        
        const updatedEvents = [...events, newEvent];
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));
        setNewEvent({ title: "", date: "", location: "", category: "" });
    };

    const filteredEvents = filter ? events.filter(event => event.category === filter) : events;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Events</h2>
            <select className="border-2 p-2 mb-2 w-full sm:w-auto rounded-md" onChange={e => setFilter(e.target.value)}>
                <option value="">All Categories</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
                <option value="Religious">Religious</option>
            </select>
            <ul className="flex flex-wrap gap-2 items-center">
                {filteredEvents.map((event, index) => (
                    <li key={index} className="border border-dashed w-full sm:w-auto p-4 mb-2 bg-white shadow">
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        <p>Date: {event.date}</p>
                        <p>Location: {event.location}</p>
                        <p>Category: {event.category}</p>
                    </li>
                ))}
            </ul>

            <h2 className="text-xl font-bold mt-6 text-center">Add New Event</h2>
            <form onSubmit={addEvent} className="w-full flex flex-wrap items-center justify-between gap-2 mt-2">
                <input className="border w-full sm:w-[18%] p-2 rounded-md" type="text" placeholder="Title" value={newEvent.title} onChange={e => setNewEvent({ ...newEvent, title: e.target.value })} required />
                <input className="border w-full sm:w-[18%] p-2 rounded-md" type="date" value={newEvent.date} onChange={e => setNewEvent({ ...newEvent, date: e.target.value })} required />
                <input className="border w-full sm:w-[18%] p-2 rounded-md" type="text" placeholder="Location" value={newEvent.location} onChange={e => setNewEvent({ ...newEvent, location: e.target.value })} required />
                <select className="border w-full sm:w-[18%] p-2 rounded-md" value={newEvent.category} onChange={e => setNewEvent({ ...newEvent, category: e.target.value })} required>
                    <option value="">Select Category</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                    <option value="Religious">Religious</option>
                </select>
                <button type="submit" className="bg-blue-600 cursor-pointer w-full sm:w-[18%] text-white px-4 py-2 rounded-md">Add Event</button>
            </form>
        </div>
    );
}
