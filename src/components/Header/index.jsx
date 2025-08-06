import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import "./header.scss"
import Navbar from '../Navbar'

function Header() {

  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Loge de Kasa" />
      </Link>

      <Navbar />      
    </header>
  )
}

export default Header