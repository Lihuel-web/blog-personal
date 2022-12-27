import React from 'react'
import './NavLink.css';

function NavLink() {
  return (
    <div className='NavLink'>
        <nav>
            <ul>
                <span><li><a href="#¡Hola!">¡Hola!</a></li></span>
                <span><li><a href="#Inteligencia artificial">Inteligencia artificial</a></li></span>
                <span><li><a href=""></a></li></span>
            </ul>
            {/*On the page you want to link to:
            Así se crea un link a otra página según ChatGPT, google no me daba la info
            Copy code
            <h2 id="target">This is the target element</h2>
            On the page with the link:
            Copy code
            <a href="otherpage.html#target">Click here to go to the target element on the other page</a> */}             
        </nav>
    </div>
  )
}

export default NavLink