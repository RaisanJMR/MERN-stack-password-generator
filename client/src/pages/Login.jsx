import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg"

const Login = () => {
    return (
        <div className='home'>
            <div className="container">
                <form>
                    <h1>LOGIN</h1>
                    <p>hi, welcome again</p>
                    <input className="input" type="text" placeholder="email" />
                    <input className="input" type="text" placeholder="password" />
                    <button>login</button>
                    <small>dont have an account?
                        <Link className="link" to={"/register"}>register</Link>
                    </small>
                </form>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Login