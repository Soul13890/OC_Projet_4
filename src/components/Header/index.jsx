import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import "../../style/header.scss"

function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <div>
        <Link to="/" className='link'>Accueil</Link>        
        <Link to="/About" className='link'>A propos</Link>
      </div>
    </nav>
  )
}

export default Header