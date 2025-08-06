import './navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {

    const currentRoute = window.location.pathname;

    return (
        <nav>
            <ul className='nav-menu'>
                <li className={currentRoute === '/' ? 'active' : ''}>
                    <Link  to='/'>
                        Accueil
                    </Link>
                </li>
                <li className={currentRoute === '/about' ? 'active' : ''}>
                    <Link  to='/about'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar