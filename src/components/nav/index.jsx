import React, { useState } from "react";
import { SubMenu } from "../submenu";
import { Link } from "react-router-dom";
import Menu from '../../assets/icons/menu.svg'
import './nav.scss';
import { NavMobile } from "../nav-mobile";

export const Nav = () => {
    const [subMenu, setSubMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    let nav = [
        {
            id: 1,
            title: 'О НАС',
            link: '/about'
        },
        {
            id: 2,
            title: 'КОНТАКТЫ',
            link: '#footer'
        }
    ];

    return (
        <div className="nav">
            <div className="nav__menu-icon">
                <img onClick={() => setMobileMenu(true)} src={Menu} alt="" />
            </div>
            {
                mobileMenu && <NavMobile nav={nav} setMobileMenu={setMobileMenu} />
            }
            <ul className="nav__item">
                <li ><a className="nav__link nav__link-catalog " onClick={() => setSubMenu(!subMenu)}>КАТАЛОГ</a>
                    {subMenu && <SubMenu setSubMenu={setSubMenu} />}
                </li>
                {nav.map(item =>
                    <li key={item.id}>
                        <Link
                            to={item.link}
                            className="nav__link"
                        >
                            {item.title}
                        </Link>
                    </li>
                )}
            </ul>
        </div >
    )
}