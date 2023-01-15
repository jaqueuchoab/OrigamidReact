import React from 'react';
// Importação dos componentes essênciais para o tratamento das rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importação dos componentes necessesários
import Produtos from './RouterChallenge/Produtos.js';
import Header from './RouterChallenge/Header.js';
import Footer from './RouterChallenge/Footer.js';
import Contato from './RouterChallenge/Contato.js';
// Importação de css global
import './App.css';


const App = () => {
    return (
        // Definindo as rotas
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Produtos />}></Route>
                        <Route path='contato' element={<Contato />}></Route>
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;