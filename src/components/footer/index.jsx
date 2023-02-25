import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentCatalog } from '../../redux/current-catalog/reducer';
import LogoBlack from '../../assets/logo/logo-black.png'
import Blur from '../../assets/blur-pink.png'
import arr from '../../json/catalog.json';
import './footer.scss';

export const Footer = () => {
    const dispatch = useDispatch();

    return (
        <div className='footer' id='footer'>
            <img src={Blur} className="blur-1" alt="" />
            <img src={Blur} className="blur-2" alt="" />
            <div className="wrapper">
                <div className="footer__blocks">
                    <div className="footer__block footer__block-logo">
                        <div className="footer__logo">
                            <img src={LogoBlack} alt="logo" />
                        </div>
                        <div className="footer__copyright">
                            <p>2022 <span style={{ fontWeight: '700' }}>JENNY</span> COSMETIC</p>
                        </div>
                    </div>
                    <div className="footer__block">
                        <div className="footer__title">
                            КАТАЛОГ
                        </div>
                        <div className="footer__items">
                            {arr.map(item => <Link
                                key={item.title}
                                to={item.link}
                                onClick={() => dispatch(setCurrentCatalog({}))}>
                                {item.title}
                            </Link>)}
                        </div>
                    </div>
                    <div className="footer__block">
                        <div className="footer__title">
                            ДЛЯ КЛИЕНТА
                        </div>
                        <div className="footer__items">
                            <Link to='/about'>О НАС</Link>
                        </div>
                    </div>
                    <div className="footer__block">
                        <div className="footer__title">
                            КОНТАКТЫ
                        </div>
                        <div className="footer__items">
                            <div className="footer__tel">
                                <a href="tel:+79198163428">+7-000-000-00-00</a>
                            </div>
                            <div className="footer__mail">
                                <a href="mailto:ayu2600@mail.ru" className='footer__mail-link'>test@mail.ru</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
