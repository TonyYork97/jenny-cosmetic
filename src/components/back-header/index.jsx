import React from "react";
import Img from '../../assets/bg-catalog.jpg'
import './back-header.scss';
export const BackHeader = () => {
    return (
        <div className="back-header">
            <img src={Img} className="back-header__image" alt="" />
        </div>
    )
}