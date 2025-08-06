import LogoFooter from '../../assets/logo-footer.svg'
import "../../style/footer.scss"

function Footer() {
  return (
    <footer>      
        <img src={LogoFooter} />
        <p>© 2020 Kasa. All rights reserved</p>   
    </footer>
  )
}

export default Footer