import React from 'react';
import RenderRoutes from './routes';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
function App() {
    return (
        <>
            <Header />
            <RenderRoutes />
            <Footer />
        </>
    );
}

export default App;
