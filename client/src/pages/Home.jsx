import Logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <div className="cta-section">
                    <h1>Empower Your Security: MERN-Powered <br /> Password generator</h1>
                    <p>Safeguarding Secrets with <span>PASSIFY</span>  Introducing Your Next-Gen Password generator</p>
                    <div className="login-signup">
                        <Link to={"/login"}>
                            <button>login</button>
                        </Link>
                        <Link to={"/register"}>
                            <button>signup</button>
                        </Link>

                    </div>
                </div>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Home