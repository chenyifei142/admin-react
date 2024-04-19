import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import '@/assets/aliFont/iconfont.css'
import './assets/styles/global.scss'
import './assets/styles/common.scss'
import {Router, useLazy} from "./router";
import {connect} from "react-redux";
import {getMenuListAction} from "@/redux/menu/action";
import store from "@/redux";

const App = (props: any) => {
    const {getMenuListAction} = props
    useEffect(() => {
        // 使用 useEffect 确保 getMenuListAction 只在组件首次渲染时被调用
        getMenuListAction();
        const routers = store.getState().menu.menuList
        useLazy(routers)
    }, []); // 传入空数组作为第二个参数，表示只在组件首次渲染时执行一次
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    )
};
export default connect((state: any) => state, {getMenuListAction})(App)

