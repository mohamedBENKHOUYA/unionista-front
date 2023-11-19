import React from 'react';
import RenderRoutes from './routes';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import 'App.css';

function App() {
    return (
        <div className="app_container">
            <Header />
            <RenderRoutes />
            <Footer />
        </div>
    );
}

export default App;
