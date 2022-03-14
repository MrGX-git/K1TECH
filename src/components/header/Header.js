
import { NavLink, Link } from 'react-router-dom'

import './header.css'

export const Header =()=> {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">K1Tech</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">პროდუქტები</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="border border-info form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn  btn-outline-primary bg-color border-info text-info" type="submit">
                  🔎
              </button>
            </form>
          </div>
        </div>
      </nav>
    )
}