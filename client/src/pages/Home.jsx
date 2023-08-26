import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { FaPlay } from "react-icons/fa"
const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <div className="cta-section">
                    <div className="image-item">
                        <img className="hero" src={Logo} width={600} height={600} alt="demo-hero" />
                    </div>
                    <h1>Empower Your Security: MERN-Powered <br /> Password generator</h1>
                    <p>Safeguarding Secrets with <span>PASSIFY</span>  Introducing Your Next-Gen Real time Password generator</p>
                    <div className="login-signup">
                        <Link to={"/login"}>
                            <button>login</button>
                        </Link>
                        <Link to={"/register"}>
                            <button>signup</button>
                        </Link>
                        <Link to={"https://youtu.be/8Sxo2Ii7Ngg"} target="_blank">
                            <button className="play">
                                <span>Demo</span>
                                <FaPlay />
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home