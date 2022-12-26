import React from 'react'
import './NavBar.css';

function NavBar() {
  return (
    <div className='NavBar'>
       <nav class="site_content" id="cel">
                <ul>
                    <span><li><a href="peliculas/peliculas.html">Películas</a></li></span>
                    <span><li><a href="">Acerca de</a></li></span>
                    <span><li><a href="">Contacto</a></li></span>
                </ul>
        </nav>
    </div>
  )
}

export default NavBar