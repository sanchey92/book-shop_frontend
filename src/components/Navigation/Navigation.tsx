import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import './Navigation.css';

const Navigation: FC = () => {
  return (
    <nav>
      <NavLink to={'/'} activeClassName='active' exact>Home</NavLink>
      <NavLink to={'/products'}>Books</NavLink>
    </nav>
  )
};

export default Navigation;
