import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = formData
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password,
        }
        dispatch(login(userData))
    }

    useEffect(() => {
        if (isError) {
            alert(message)
        }
        // Redirect when logged in
        if (isSuccess || user) {
            navigate('/main')
        }
        dispatch(reset())
    }, [dispatch, navigate, isError, isSuccess, user, message])

    return (
        <div className='home'>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <h1>LOGIN</h1>
                    <p>hi, welcome again</p>
                    <input className="input" value={email}
                        onChange={onChange} id='email'
                        name='email' type="email" placeholder="email" />
                    <input className="input" value={password}
                        onChange={onChange} id='password'
                        name='password' type="password" placeholder="password" />
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