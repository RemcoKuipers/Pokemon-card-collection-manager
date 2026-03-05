import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import CardDetail from "./pages/CardDetail";
import Collection from "./pages/Collection";

function App() {
    return (
        <BrowserRouter>

            <div className="layout">

                <Navbar />

                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/card/:id" element={<CardDetail />} />
                        <Route path="/collection" element={<Collection />} />
                    </Routes>
                </main>

            </div>

        </BrowserRouter>
    );
}

export default App;