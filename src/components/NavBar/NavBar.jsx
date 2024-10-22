import { NavLink } from 'react-router-dom'
import useCategories from '../../utils/hooks/useCategories'
import './navbar.css'

const Navbar = () => {

  const { categories, isLoaded, error } = useCategories(); 

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <nav className="navbar">
      <div className="container">
        
        
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all">All products</NavLink>
            </li>
              {categories.map((categorie, index) => (
                <li key={index}>
                <NavLink  to={`/category/${categorie}`}>{categorie}</NavLink>
                </li>
              ))}
            
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
           
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar