import styles from './header.module.css'
import { useNavigate } from 'react-router-dom'
import UniLogo from '../../assets/Logo.png'

export function Header() {

    const { isAuthenticated} = false;
    const navigate = useNavigate();

    return (
        <header>
            <div className='logo'>
                <img src={UniLogo} alt='UniLogo' style={{width: '150px', height: '150px', paddingTop: '5px'}} />
            </div>
            <nav>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
            </nav>
            <div className='login'>
                {isAuthenticated ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <button onClick={(e) => navigate('/signIn')}>Login</button>
                )}
            </div>
        </header>
    );
}

