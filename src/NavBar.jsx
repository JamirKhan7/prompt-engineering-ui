import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <div className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/pizzabot">Pizza Bot</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Prompts</NavLink>
          </li>
        </div>
      </div>
    </nav>
  )
}
