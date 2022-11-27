import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./App";




export default function App() {
    return (
        <BrowserRouter>
            <Routes>

                    <Route index element={<Main />} />
                    <Route path="/main" element={<Login/>}/>



            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

