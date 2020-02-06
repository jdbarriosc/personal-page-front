import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Routes from './Routes.jsx';

import "./App.css";


class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Helmet>
                    <title>Juan Diego Barrios</title>
                </Helmet>
                <Routes />
            </BrowserRouter>
        );
    }
}

export default App;