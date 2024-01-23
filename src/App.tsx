import React from 'react';
import {useRoutes} from "react-router-dom";
import routes from "./router";
import './assets/styles/global.scss'
import './assets/styles/common.scss'

const App = () => {
    const outlet = useRoutes(routes)
    return (
        <div style={{height: '100%', width: '100%'}} className='flex-center'>
            {outlet}
        </div>
    )
};
export default App;
