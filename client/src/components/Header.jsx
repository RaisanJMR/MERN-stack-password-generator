import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { AiOutlineLogout } from 'react-icons/ai'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const Logout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <div className='header'>
            <div className="header-container">
                <h1>hi, {user.username}</h1>
                <button onClick={Logout} className='logout'>
                    <AiOutlineLogout /> logout
                </button>
            </div>
        </div>
    )
}

export default Header