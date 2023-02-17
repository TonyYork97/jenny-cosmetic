import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setCurrentCatalog } from "../../redux/current-catalog/reducer";
import arr from '../../json/catalog.json'
import { useSelector } from "react-redux";
import './catalog-menu-block.scss';

export const SubMenu = ({ hide, setSubMenu }) => {
    const dispatch = useDispatch();
    const [catalog, setCatalog] = useState([]);
    const catalogRef = useRef();


    useEffect(() => {
        window.addEventListener('click', closeCatalog);

        return () => {
            window.removeEventListener('click', closeCatalog)
        }
    })
    const closeCatalog = (e) => {
        if (e.target === catalogRef.current || e.target.classList.contains('nav__link-catalog')) return;
        setSubMenu(false)
    }

    return (
        <div ref={catalogRef} className={`${hide} catalog-menu`} id="submenu">
            <ul className="catalog-menu__list">
                {arr.map(item =>
                    <li key={item.title}>
                        <Link
                            to={item.link}
                            className="catalog-menu__link"
                            onClick={() => dispatch(setCurrentCatalog({}))}
                        >{item.title}</Link>
                    </li>
                )}


            </ul>
        </div >
    )
}