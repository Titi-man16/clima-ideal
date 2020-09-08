import React from 'react'
import "./Header.css"
import HomeIcon from '@material-ui/icons/Home';

function Header() {
   return (
      <div className="header">
         <div className="header__left">
            <img
               src="https://www.detodocasa.com/public/img/perfil_negocios/619_5185b990d31e4.jpg" alt=""
            />
         </div>

         <div className="header__right">
            <div className="nav__bar">
               <ul>
                  <li className="nav__items">Home</li>
                  <li className="nav__items">Venta</li>
                  <li className="nav__items">Mantenimiento</li>
                  <li className="nav__items">Servicios</li>
                  <li className="nav__items">Historia</li>
                  <li className="nav__items">Contacto</li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Header;
