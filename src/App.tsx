import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import NoPage from "./pages/NoPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="tickets" element={<Tickets />} />
                    <Route path="information" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
