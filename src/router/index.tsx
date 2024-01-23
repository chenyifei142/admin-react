import Home from "../pages/home";
import {Navigate} from "react-router-dom";
import Login from "../pages/login/login";

const routes = [
    {
        path: "/",
        element: <Navigate to='/home'/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
]

// const Router = () => {
//     const routes = useRoutes(routes)
//     return routes
// }

export default routes


// import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
// import App from "../App";
// import Home from "../pages/home";
// import Login from "../pages/login/login";
//
// const baseRouter = () => (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App/>}>
//                 <Route path='/' element={<Navigate to='/home'/>}></Route>
//                 <Route path='/login' element={<Login/>}></Route>
//                 <Route path='/home' element={<Home/>}></Route>
//             </Route>
//         </Routes>
//     </BrowserRouter>
// )
//
// export default baseRouter
