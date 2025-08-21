import { Link } from "react-router-dom"

function Card({id, cover, name}) {
  return (
    <li className="card-item">
      <Link to={`/logement/${id}`} key={id}>
          <img className="card-item-cover" src={cover} alt={"${name} cover"} />
          <div className="card-item-name">{name}</div>
      </Link>
    </li>
  )
}

export default Card