import React, { useEffect } from 'react';
import { AboutImage } from '../about-image';
import { Link } from 'react-router-dom'
import './about.scss';

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='about'>
            <div className="wrapper">
                <div className="about__title-block">
                    <div className="about__subtitle">
                        <h5 className='white'>ABOUT</h5>
                    </div>
                    <div className="about__title-block-flex">
                        <div className="about__left">
                            <div className="about-title">
                                <h2 className='about__h2 f-mak'>Немного о нас</h2>
                            </div>
                        </div>
                        <div className="about__right">
                            <div className="about__text">
                                <p className='about__p white'>В JENNY COSMETIC МЫ УВЛЕЧЕНЫ РАЗРАБОТКОЙ ТРАНСФОРМИРУЮЩИХ КОЖУ ПРОДУКТОВ, КОТОРЫЕ ПРИНОСЯТ ВИДИМЫЕ РЕЗУЛЬТАТЫ.</p>
                                <p className='white'>НАША ЦЕЛЬ – ДАТЬ КАЖДОЙ ДЕВУШКЕ ВОЗМОЖНОСТЬ ПРАВИЛЬНО ПОЗАБОТИТЬСЯ О СВОЕЙ КОЖЕ, ИЗБАВИТЬСЯ ОТ КОМПЛЕКСОВ, И ПОЛЮБИТЬ СЕБЯ С НОВОЙ СИЛОЙ!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <AboutImage />
                <div className="about__text-block">
                    <div className="about__block-left">
                        <p className='about__text-title white f-mak'>В JENNY COSMETICS ВЫ НАЙДЕТЕ НЕЗАМЕНИМЫЕ СРЕДСТВА ДЛЯ ВАШЕЙ КРАСОТЫ И МОЛОДОСТИ.</p>
                        <p className='about__text-second white'>У НАС ВЫ ПОЛУЧАЕТЕ ГАРАНТИЮ ВЫСОКОГО КАЧЕСТВА. НАШИ МАССАЖЕРЫ ИЗГОТОВЛЕНЫ ИЗ НАТУРАЛЬНЫХ ЦЕЛЬНЫХ МИНЕРАЛОВ,КРИОСФЕРЫ ВЫПОЛНЕНЫ ИЗ КАЧЕСТВЕННОГО, ХОРОШО ОБРАБОТАННОГО СТЕКЛА, ВНУТРИ КОТОРОГО НАХОДИТСЯ НЕЗАМЕРЗАЮЩАЯ ГЕЛЕОБРАЗНАЯ ЖИДКОСТЬ. ТАК ЧТО ИХ МОЖНО ХРАНИТЬ В МОРОЗИЛЬНИКЕ.
                            ДЛЯ НАС ТАКЖЕ ВАЖНО, ЧТОБЫ УХОД ЗА КОЖЕЙ БЫЛ НЕ ТОЛЬКО ЭФФЕКТИВНЫМ, НО И БЕЗОПАСНЫМ.</p>
                        <div className="about__catalog-link">
                            <p className='white'>ПЕРЕХОДИТЕ В НАШ КАТАЛОГ, ЧТОБЫ ОЗНАКОМИТЬСЯ С ПОЛНЫМ АССОРТИМЕНТОМ. У НАС ДЕЙСТВУЕТ ДОСТАВКА ПО ВСЕЙ РОССИИ И ОЧЕНЬ КОМФОРТНЫЙ СЕРВИС.</p>
                            <div className='about__link'>
                                <Link to='/all-catalog' className='product-category__link'>ПЕРЕЙТИ В КАТАЛОГ</Link>
                            </div>
                        </div>
                    </div>
                    <div className="about__block-right">
                        <div className="about__item">
                            <div className="about__item-block">
                                <div className="about__item-image">
                                    <img src="images/cosmetics/дневная сыворотка для лица.jpg" alt="сыворотка" />
                                </div>
                                <div className="about__item-text">
                                    <h3 >СЫВОРОТКИ ДЛЯ ЛИЦА</h3>
                                    <p>ПОЗАБОТЯТСЯ О ТОМ, ЧТОБЫ ВАША КОЖА ОСТАВАЛАСЬ УПРУГОЙ, СДЕЛАЮТ КОНТУРЫ ЛИЦА ВЫРАЗИТЕЛЬНЫМИ И ОТСРОЧАТ ПРОЦЕССЫ СТАРЕНИЯ НА ДОЛГИЕ ГОДЫ.</p>
                                </div>
                            </div>
                        </div>
                        <div className="about__item">
                            <div className="about__item-block">
                                <div className="about__item-image">
                                    <img src="images/cosmetics/крем для проблемной кожи.jpg" alt="крем" />
                                </div>
                                <div className="about__item-text">
                                    <h3>КРЕМА ДЛЯ КОЖЫ</h3>
                                    <p>ПОЗАБОТЯТСЯ О ТОМ, ЧТОБЫ ВАША КОЖА ОСТАВАЛАСЬ УПРУГОЙ, СДЕЛАЮТ КОНТУРЫ ЛИЦА ВЫРАЗИТЕЛЬНЫМИ И ОТСРОЧАТ ПРОЦЕССЫ СТАРЕНИЯ НА ДОЛГИЕ ГОДЫ.</p>
                                </div>
                            </div>
                        </div>
                        <div className="about__item">
                            <div className="about__item-block">
                                <div className="about__item-image">
                                    <img src="images/cosmetics/шампунь для кожи головы.jpg" alt="шампунь" />
                                </div>
                                <div className="about__item-text">
                                    <h3>ШАМПУНИ ДЛЯ РАЗНЫХ ТИПОВ ВОЛОС</h3>
                                    <p>ПОЗАБОТЯТСЯ О ТОМ, ЧТОБЫ ВАША КОЖА ОСТАВАЛАСЬ УПРУГОЙ, СДЕЛАЮТ КОНТУРЫ ЛИЦА ВЫРАЗИТЕЛЬНЫМИ И ОТСРОЧАТ ПРОЦЕССЫ СТАРЕНИЯ НА ДОЛГИЕ ГОДЫ.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
