import Rating from "../Rating"
import Collapse from "../Collapse"

const InfoLogement = ({ logement }) => {
  
  return(
    <div className="infos-container">
        <div className="infos-logement-host">
            <div className="infos-logement">
                <h2 className="infos-title">
                    {logement.title}
                </h2>
                <h3 className="infos-location">
                    {logement.location}
                </h3>

                <ul className='infos-tags-list'>
                    {logement.tags.map((tag) => (                
                        <li key={tag} className="infos-tag">
                            <p>{tag}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="infos-host-rating">
                <div className="infos-host">
                    <h3 className="infos-name">
                        {logement.host.name}
                    </h3>
                    <img className="infos-picture" src={logement.host.picture} alt="photo du propriétaire" />
                </div>  
                <ul className="rating">
                    <Rating rating={logement.rating}/>
                </ul>
            </div>            
        </div>
        <div className="collapses-container">
            <Collapse title="Description">
                <p>{logement.description}</p>
            </Collapse>

            <Collapse title="Équipements">
                <ul>
                    {logement.equipments.map((equipment) => (                
                        <li key={equipment} className="infos-tag">
                            {equipment}
                        </li>
                    ))}
                </ul>
            </Collapse>
        </div>

        
    </div>
  )
};

export default InfoLogement;