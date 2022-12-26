
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
<header>
            <div class="empty_div_header"></div>
            <div class="title_header"><h1>Blog del profe Lihuel</h1></div>
            <div class= "main-menu"><nav>
                <div class= "empty_up_main-menu"></div>
                    <ul>
                        <li><Link to="/">Home</Link></li> 
                        <li><Link to="/contact">Contact</Link></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                <div class= "empty_down_main-menu"></div>
                </nav>
            </div>
        </header>
);

export default Header;