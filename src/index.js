import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./App";




export default function App() {
    return (
        <BrowserRouter>
            <Routes>

                    <Route index element={<Login />} />
                    <Route path="/main" element={<Main/>}/>



            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

