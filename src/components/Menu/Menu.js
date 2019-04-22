import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


const menus = [
    {
        to: "/",
        exact: true,
        label: "Home"
    },
    {
        to: "/product-list",
        exact: false,
        label: "Products"
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? "active" : '';
                return (
                    <li className={`${active}`}>
                        <Link to={to}>{label}</Link>
                    </li>
                )
            }}
        />
    );
}

class Menu extends Component {

    showMenus = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu,index)=>{
                return (
                    <MenuLink key={index} label={menu.label} to={menu.to} activeOnlyWhenExact={menu.exact}  />
                )
            })
        }
        return result;
    }
    render() {
        return (
            <nav className="navbar navbar-default navbar-default" role="navigation">
                <Link className="navbar-brand" to="/">CALL API</Link>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }
}

export default Menu;