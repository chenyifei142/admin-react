import {Layout} from 'antd'
import './index.scss'
import Logo from "@/layouts/components/header/components/Logo";
import CollapseIcon from "@/layouts/components/header/components/CollapseIcon";
// import NotifyIcon from "@/layouts/components/header/components/NotifyIcon";
import AvatarIcon from "@/layouts/components/header/components/AvatarIcon";
import Bread from "@/layouts/components/bread";

const LayoutHeader = () => {
    const {Header} = Layout

    return (
        <Header>
            <div className="header-lf flex items-center">
                <Logo/>
                <CollapseIcon/>
                <Bread />
            </div>
            <div className="header-ri flex items-center">
                <AvatarIcon/>
            </div>
        </Header>
    )
}

export default LayoutHeader
