import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import Logo from "../assets/logo.svg"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'


const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    })
    const { username, email, password, password2 } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

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

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            alert('Passwords do not match')
        } else {
            const userData = {
                username,
                email,
                password,
            }
            dispatch(register(userData))
        }
    }

    return (
        <div className='home'>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <h1>Register</h1>
                    <p>join us to generate passwords</p>

                    <input className="input" type="text" id='username'
                        name='username' value={username}
                        onChange={onChange} placeholder="name" />

                    <input className="input" type="email" id='email'
                        name='email' value={email}
                        onChange={onChange} placeholder="email" />

                    <input className="input" type="password" id='password'
                        name='password' value={password}
                        onChange={onChange} placeholder="password" />
                    <input className="input" type="password2" id='password2'
                        name='password2' value={password2}
                        onChange={onChange} placeholder="password" />
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