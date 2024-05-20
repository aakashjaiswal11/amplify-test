import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./App.css";

const Navbar = () => {
  const Navigated = useNavigate();
   async function logout()
  {
    localStorage.clear()
    Navigated("/Login")
  }
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="menubar">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Aakash</a>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">              
                <li class="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li class="nav-item">
                <NavLink className="nav-link" to="/Favorite">Favorite</NavLink>
                </li>  
            </ul>   

                {!localStorage.getItem('user-info') ? 
                <ul class="navbar-nav right">     
                <li class="nav-item">
                  <NavLink className="nav-link" to="/Login">Login</NavLink>
                </li>  
                </ul>
                : null
              }
                                
            

                {localStorage.getItem('user-info') ? 
                <ul class="navbar-nav right">
                  <li class="nav-item">
                    <NavLink className="nav-link" to="/" onClick={logout}>Logout</NavLink>
                  </li>
                </ul>
                : null
                }
            </div>
        </div>
    </nav>
 </>
  )
};

export default Navbar;