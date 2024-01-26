import Home from "../pages/home";
import {Navigate} from "react-router-dom";
import Login from "../pages/login/login";
// 模拟用户登录状态
const isUserLoggedIn = localStorage.getItem('token');

const routes = [
    {
        path: "/",
        element: isUserLoggedIn ? <Home/> : <Navigate to="/login"/>,
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
