import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import Spinner from "../components/Spinner"

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
            toast.error("error occoured! try again")
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
            toast.error('Passwords do not match')
        } else {
            const userData = {
                username,
                email,
                password,
            }
            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }
    
    return (
        <div className='home'>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <h1>REGISTER</h1>
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
                    <input className="input" type="password" id='password2'
                        name='password2' value={password2}
                        onChange={onChange} placeholder="password" />
                    <button>Register</button>
                    <small>already have account?
                        <Link className="link" to={"/login"}>login</Link>
                    </small>
                </form>

            </div>
        </div>
    )
}

export default Register