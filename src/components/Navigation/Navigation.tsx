import React, {FC} from "react";
import {NavLink, Link} from "react-router-dom";
import './Navigation.css';
import CartTotal from "../CartTotal/CartTotal";

type Routes = {
  link: string,
  linkTitle: string,
  exact: boolean
}

interface INavigationProps {
  routes: Routes[]
}

const Navigation: FC<INavigationProps> = ({routes}) => {
  return (
    <div className='nav-container'>
      <nav>
        {
          routes.map((route) => {
            const {link, linkTitle, exact} = route;
            return (
              <NavLink
                key={linkTitle}
                to={link}
                activeClassName='active'
                exact={exact}
              >
                {linkTitle}
              </NavLink>
            )
          })
        }
      </nav>
      <div className='wrap'>
        <Link to='/login' className='nav-login'>Login</Link>
        <CartTotal/>
      </div>
    </div>
  )
};

export default Navigation;
