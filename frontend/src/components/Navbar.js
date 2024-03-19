import { Link } from 'react-router-dom'
import logoImage from './gymbuddy.png'; 

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
        <img src={logoImage} alt="Gym Bro Logo" style={{ height: '150px' }} />
          <h1>Gym Bro</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar