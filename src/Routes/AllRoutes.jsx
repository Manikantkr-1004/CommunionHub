import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Events } from "../Pages/Events";

export function AllRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
        </Routes>
    );
}
