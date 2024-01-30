import {Layout} from 'antd'
import './index.scss'
import Logo from "@/pages/home/components/header/components/Logo";
import CollapseIcon from "@/pages/home/components/header/components/CollapseIcon";
import NotifyIcon from "@/pages/home/components/header/components/NotifyIcon";
import AvatarIcon from "@/pages/home/components/header/components/AvatarIcon";

const LayoutHeader = () => {
    const {Header} = Layout

    return (
        <Header>
            <div className="header-lf flex items-center">
                <Logo/>
                <CollapseIcon/>
            </div>
            <div className="header-ri flex items-center">
                <AvatarIcon/>
            </div>
        </Header>
    )
}

export default LayoutHeader
