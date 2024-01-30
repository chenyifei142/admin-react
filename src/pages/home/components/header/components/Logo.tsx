import React from 'react'

import logo from '@/assets/images/logo.png'
// import logo from '@/assets/svg/logo.svg'

const Logo: React.FC = () => (
    <div className="logo flex items-center">
        <img src={logo} alt="logo" className="logo-img" />
        <h2 className="logo-text">管理后台</h2>
    </div>
)

export default Logo
