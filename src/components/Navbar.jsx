import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate();
 const handleLoginRedirect = () => {
        navigate("/login");}
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-white fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">   <i className="bi bi-lightning-fill"></i> ECCO </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Home <i class="bi bi-chevron-compact-down"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Electronics <i class="bi bi-chevron-compact-down"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='#'>Blog <i class="bi bi-chevron-compact-down"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='#'>Pages <i class="bi bi-chevron-compact-down"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='#'>Contact</a>
        </li>
      </ul>
      <form class="d-flex gap-2" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn search-btn" type="submit">Search</button>
      </form>
     <div className='cart_wishlist'>
         <i onClick={handleLoginRedirect} class="bi bi-bag-fill"></i>
      <i onClick={handleLoginRedirect} class="bi bi-heart"></i>
     </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar