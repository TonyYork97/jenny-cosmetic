import React from "react";
import { Link } from 'react-router-dom';
import LogoBlackFull from '../../assets/logo/logo-full-white.png'
import LogoBlack from '../../assets/logo/logo-white.png'
import { useResize } from "../../hooks/useResize";
import './logo.scss';

export const Logo = () => {
    const { width } = useResize()
    return (
        <>
            <div className="logo">
                <Link to='/' className="logo__link">
                    <img className="logo__image full" src={LogoBlackFull} alt="logo" />
                    <img className="logo__image min" src={LogoBlack} alt="logo" />
                </Link>
            </div>

        </>
    )
}