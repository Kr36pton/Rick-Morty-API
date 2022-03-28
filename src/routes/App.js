import React from 'react';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Dashboard from '../containers/Dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigate from '../components/Navigate';
import NewPage from '../containers/NewPage.jsx'
import CharacterInfo from '../containers/CharacterInfo';

function App(){

    return(
        <BrowserRouter>
            <Navigate />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Dashboard />} />
                <Route path="/page" element={<NewPage />} />
                <Route path="/info" element={<CharacterInfo />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App