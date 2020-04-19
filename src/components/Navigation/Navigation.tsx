import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import './Navigation.css';

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
  )
};

export default Navigation;
