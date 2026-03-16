import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Search from "./pages/Search/Search.jsx";
import CardDetail from "./pages/CardDetail/CardDetail.jsx";
import Collection from "./pages/Collection/Collection.jsx";

function App() {
    return (


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


    );
}

export default App;