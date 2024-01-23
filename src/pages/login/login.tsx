import './index.scss'
import loginLeftImg from "@/assets/images/login_left.png";
import logoImg from "@/assets/images/logo.png";
import LoginForm from "./components/LoginForm";

const Login = () => {
    return (
        <div className="login-container flex-center">
            <div className="login-box">
                <div className="login-left">
                    <img className="login-left-img" src={loginLeftImg} alt="#"/>
                </div>
                <div className="login-form">
                    <div className="login-logo">
                        <img className="login-icon" src={logoImg} alt="#"/>
                        <h2 className="logo-text">管理后台</h2>
                    </div>
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}

export default Login
