import React from 'react'
import { Link } from 'react-router-dom';
import LogoFull from '../../../assets/logo/logo-pink.png'

import './home-about.scss';

export const HomeAbout = () => {
    return (
        <div className="home-about">

            <div className="home-about__background"></div>
            <div className="wrapper">
                <div className="home-about__wrapper">
                    <div className="product-category__title">
                        <h5 className="title__h5 white">ABOUT US</h5>
                    </div>
                    <div className="home-about__block">
                        <div className="home-about__left">
                            <div className="home-about__image">
                                <img src={LogoFull} alt="" />
                            </div>

                        </div>
                        <div className="home-about__right">
                            <div className="home-about__text white">
                                JENNY COSMETICS - ЭТО СОВРЕМЕННЫЕ, ИННОВАЦИОННЫЕ КОСМЕТИЧЕСКИЕ СРЕДСТВА ДЛЯ ЗДОРОВЬЯ И КРАСОТЫ ВАШЕЙ КОЖИ, ИЗГОТОВЛЕННЫЕ С ИСПОЛЬЗОВАНИЕМ ПЕРЕДОВЫХ ТЕХНОЛОГИЙ K-BEAUTY И МНОГОВЕКОВЫХ АЗИАТСКИХ ТРАДИЦИЙ.
                            </div>
                            <div className=" product-category__button home-about__button">
                                <Link to="/about" className=" product-category__link home-about__button">УЗНАТЬ ПОДРОБНЕЕ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
