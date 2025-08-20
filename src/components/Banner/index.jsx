import BannerHome from "../../assets/banner-home.png"
import BannerAbout from "../../assets/banner-about.png"
import { useLocation } from 'react-router-dom';

function Banner() {

  // On utilise le useLocation pour pouvoir changer
  // le contenu de la banner en fonction de l'url
  const location = useLocation();

  let imageSrc;
  let bannerContent;

  switch (location.pathname) {
    case '/':
      imageSrc = BannerHome;
      bannerContent = <h1>Chez vous, partout et ailleurs</h1>;
      break;
    case '/about':
      imageSrc = BannerAbout;
      bannerContent = null;
      break;
    default:
      imageSrc = BannerHome;
      bannerContent = <h1>Erreur Banner</h1>;
  }

  return (
    <div className="banner">
        <img src={imageSrc} alt="Bannière" className="bannerImg" />
        <div className="bannerBackground"></div>
        {bannerContent}
    </div>
  )
}

export default Banner