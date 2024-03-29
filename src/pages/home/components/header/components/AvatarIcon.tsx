// import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Avatar, Dropdown, message, Modal } from 'antd'

import avatar from '@/assets/images/avatar.png'
// import { MenuEnum } from '@/enum/menu'
// import { clearInfo } from '@/redux/modules/user/action'

const AvatarIcon = () => {
    const navigate = useNavigate()

    // 退出登录
    const logout = () => {
        Modal.confirm({
            title: '温馨提示',
            icon: <ExclamationCircleOutlined />,
            content: '是否确认退出登录？',
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
                // clearPersistor()
                message.success('退出成功！')
                navigate('/login')
            }
        })
    }
    const onClick: MenuProps['onClick'] = ({ key }: { key: string }) => {
        if (key == '2') {
            logout()
        }
    }

    // Dropdown Menu
    const items: MenuProps['items'] = [
        {
            key: '2',
            label: '退出系统'
        }
    ]
    return (
        <>
            <Dropdown
                className="cursor-pointer"
                menu={{ items, onClick }}
                placement="bottom"
                arrow
                trigger={['click']}
            >
                <Avatar size="large" src={avatar} />
            </Dropdown>
        </>
    )
}

export default AvatarIcon
// export default connect(null, { clearInfo })(AvatarIcon)
