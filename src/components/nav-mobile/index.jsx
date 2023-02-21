import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { VscChromeClose } from 'react-icons/vsc'

import { Link } from 'react-router-dom'
import arr from '../../json/catalog.json'

import { setCurrentCatalog } from '../../redux/current-catalog/reducer';
import './nav-mobile.scss'
export const NavMobile = ({ nav, toggleMenu }) => {
  const dispatch = useDispatch();
  const [subMenu, setSubMenu] = useState(false);
  const [catalog, setCatalog] = useState([]);
  const catalogRef = useRef();

  return (
    <div className='nav-mobile'>
      <div className='close-menu'>
        <VscChromeClose
          className='white'
          onClick={toggleMenu}
          size={30}
        />
      </div>

      <div className='nav-mobile-block'>
        <ul className='nav-mobile-list'>
          <li className='nav-mobile-li'><a onClick={() => setSubMenu(!subMenu)}>Каталог</a>
            {subMenu
              ? <div className={`nav-mobule_submenu`} id="submenu">
                <ul className="nav-mobile-list">
                  {arr.map(item =>
                    <li key={item.title}>
                      <Link
                        to={item.link}
                        className="nav-mobule_submenu-link"
                        onClick={() => {
                          toggleMenu()
                          dispatch(setCurrentCatalog({}))
                        }}
                      >{item.title}</Link>
                    </li>
                  )}
                </ul>
              </div >
              : ''
            }
          </li>
          {nav.map(el => <li onClick={toggleMenu} className='nav-mobile-li' key={el.id}><Link to={el.link}>{el.title}</Link></li>)}
        </ul>
      </div>
    </div>
  )
}
