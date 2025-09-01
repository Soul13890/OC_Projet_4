import Header from "../../components/Header"
import Carousel from "../../components/Carousel"
import InfoLogement from "../../components/InfoLogement"
import data from "../../datas/data.json"
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Logement() {

  const { id } = useParams();
  const logement = data.find(item => item.id === id);

  if (!logement){
    return <Navigate to="/error" replace/>
  }

  const slides = logement.pictures.map((url, index) => (
    <img src={url} alt={`Slide ${index + 1}`} key={index} />
  )); 
  
  return (
    <div>
      <Header/>
      <Carousel items={slides}/>
      <InfoLogement logement={logement}/>
    </div>
  )
}

export default Logement