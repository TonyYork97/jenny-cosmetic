import React, { useRef, useEffect } from 'react';
import { Nav } from '../nav';
import { Logo } from '../logo';
import { NavRight } from '../nav-right';
import './header.scss';

export const Header = () => {
    let headerRef = useRef();
    // let oldScrollY = 0;
    // function changeHeaderEffectAfterScroll() {
    //     let offset = window.scrollY
    // let dY = scrolled - oldScrollY;

    // if (dY > 0) {
    //     console.log(headerRef);
    //     headerRef.current.className ="fixed fixed-bottom"
    // } else {
    //     headerRef.current.className = "fixed fixed-top";
    // }

    // oldScrollY = scrolled;

    //     if (offset < 50) {
    //         headerRef.current.style.backgroundColor = `rgba(148, 85, 118, 0)`;
    //     }
    //     else if (offset > 50 && offset <= 250) {
    //         headerRef.current.style.backgroundColor = `rgba(148, 85, 118, 0.${offset * 3})`;
    //     } else if (offset > 250) {
    //         headerRef.current.style.backgroundColor = `rgba(148, 85, 118, 1)`;
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', changeHeaderEffectAfterScroll);


    // });

    return (
        <div className='header' ref={headerRef}>
            <div className="wrapper">
                <div className="header__flex">

                    <div className="header__item">
                        <Nav />
                    </div>
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <div className="header__item">
                        <NavRight />
                    </div>
                </div>
            </div>
        </div >
    )
}