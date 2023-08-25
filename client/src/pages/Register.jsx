import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg"

const Register = () => {
    return (
        <div className='home'>
            <div className="container">
                <form>
                    <h1>Register</h1>
                    <p>join us to generate passwords</p>
                   <input className="input" type="text" placeholder="name" />
                   <input className="input" type="text" placeholder="email" />
                   <input className="input" type="text" placeholder="password" />
                    <button>Register</button>
                    <small>already have account?
                        <Link className="link" to={"/login"}>login</Link>
                    </small>
                </form>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Register