import Home from "../pages/home";
import Layouts from "@/layouts/index";
import {Navigate, useRoutes} from "react-router-dom";
import Login from "../pages/login/login";
import {RoutersProps} from "@/router/interface";
import LazyLoad from "@/router/LazyLoad";
import {lazy} from "react";
import Auth from "@/router/auth";
// 模拟用户登录状态
const isUserLoggedIn = localStorage.getItem('token');
export const LayoutIndex = () => <Layouts/>

const routers = [
    {
        path: "/",
        element: <Navigate to="login"/>,
    },
    {
        path: '/login',
        element: <Login/>
    },
]


/**
 * 过滤异步路由，根据传入的 routes 数组和已加载的模块信息动态生成新的路由配置并返回
 * @param routes 原始路由配置数组
 * @param routers 已加载的模块信息数组
 * @returns 过滤后的路由配置数组
 */
function filterAsyncRouter(routes: RoutersProps[], routers: RoutersProps[]) {
    /*
      创建一个对象，其键是模块相对于项目根目录的路径，
      而值是导入这些模块的函数。'/src/pages/**' 是一个 glob 模式，
      它匹配 /src/pages 目录下（包括子目录）的所有文件。
    * */
    const viteModule = import.meta.glob('/src/pages/**')
    routes.map((route: RoutersProps, index: number) => {
        let Module: JSX.Element | any = ''
        const {meta} = route
        // 如果当前路由的 element 属性为 'Layout'，则将对应的路由配置替换为一个固定的 Layout 组件
        if (route.element === 'Layout') {
            routers[index] = {
                element: <LayoutIndex/>
            }
        } else {
            // 否则，根据当前路由的 element 属性拼接对应的模块路径，并通过动态导入加载模块
            const URL = `/src/pages/${route.element}.tsx`
            Module = LazyLoad(lazy(viteModule[URL]))
            const ele = meta?.auth ? <Auth>{Module}</Auth> : Module
            routers[index] = {
                path: route.path,
                element: route.element ? ele : null
            }
        }

        // 如果当前路由有子路由，则递归调用 filterAsyncRouter 函数处理子路由，
        // 并将处理后的子路由配置赋值给当前路由的 children 属性
        if (route.children && route.children.length) {
            routers[index].children = filterAsyncRouter(route.children, routers[index].children || [])
        }
    })
    return routers
}

const useLazy = (routes: RoutersProps[]) => {
    const tempRoutes: RoutersProps[] = []
    filterAsyncRouter(routes, tempRoutes)
    routers.push(...tempRoutes)
    routers.push({
        path: '*',
        element: <Navigate to="/error/404"/>
    })
}
const Router = () => {
    return useRoutes(routers)
}

export {Router, useLazy}

