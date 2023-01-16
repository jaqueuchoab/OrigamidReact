import React from 'react';
// Importação dos componentes essênciais para o tratamento das rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação dos componentes necessesários
import Produtos from './RouterChallenge/Components/Produtos.js';
import Header from './RouterChallenge/Components/Header.js';
import Footer from './RouterChallenge/Components/Footer.js';
import Contato from './RouterChallenge/Components/Contato.js';
import Produto from './RouterChallenge/Components/Produto.js';

// Importação de css global, todos os componentes tem acesso
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
                        <Route path='produto/:id' element={<Produto />}></Route>
                        <Route path='contato' element={<Contato />}></Route>
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;