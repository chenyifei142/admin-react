import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './assets/styles/global.scss'
import './assets/styles/common.scss'
import Router from "./router";

const App = () => {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    )
};
export default App;
