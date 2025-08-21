import Header from "../../components/Header"
import Carousel from "../../components/Carousel"
import data from "../../datas/data.json"
import { useParams } from "react-router-dom";

function Logement() {

  const { id } = useParams();
  // Choisir un logement par ID (par exemple depuis une route ou dynamiquement)
  const logementId =  'b9123946';
  const logement = data.find(item => item.id === id);

  if (!logement) return <p>Logement non trouvé</p>;

  const slides = logement.pictures.map((url, index) => (
    <img src={url} alt={`Slide ${index + 1}`} key={index} />
  ));
  
  return (
    <div>
      <Header/>
      <Carousel items={slides}/>
    </div>
  )
}

export default Logement