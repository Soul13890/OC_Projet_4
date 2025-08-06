import BannerHome from "../../assets/banner-home.png"
import "./banner.scss"

function Banner() {
  return (
    <div className="banner">
        <img src={BannerHome} alt="Bannière d'accueil" className="bannerImg" />
        <div className="bannerBackground"></div>
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner