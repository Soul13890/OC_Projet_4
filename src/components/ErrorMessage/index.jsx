import { Link } from 'react-router-dom'

function ErrorMessage() {
  return (
    <div className="error-container">       
        <h2 className="error-container-title">404</h2>
        <p className="error-container-text">Oups! La page que vous demandez n'existe pas.</p>
        <Link  to='/' className="error-container-link" onClick={() => window.scrollTo(0,0)}>
            Retourner sur la page d'accueil
        </Link>
    </div>
  )
}

export default ErrorMessage