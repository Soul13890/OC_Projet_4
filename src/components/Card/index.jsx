import "./card.scss"

function handleClick(locationName){
    alert(`Vous avez choisi ${locationName}`);
}

function Card({cover, name}) {
  return (
    <li className="card-item" onClick={() => handleClick(name)}>
        <img className="card-item-cover" src={cover} alt={"${name} cover"} />
        <div className="card-item-name">{name}</div>
    </li>
  )
}

export default Card