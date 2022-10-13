import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../Components/Header'
import {Home, Characters, NotFound} from '../Pages/index'
import Footer from '../Components/Footer'

export default function Rotas() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/chars' element={<Characters />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}