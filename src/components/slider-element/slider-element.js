import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentCatalog } from '../../redux/current-catalog/reducer';
import { Link } from 'react-router-dom';

export const SliderElement = ({ item, index }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setCurrentCatalog(item))
    }
    return (
        <div className="slider-image__item" style={{
            backgroundImage: `url(${item.sliderImage})`
        }}>
            <div className="slider-image__block">
                <div className="cur-catalog__subtitle">
                    <h5>{item.subTitle}</h5>
                </div>
                <div className="cur-catalog__title">
                    <h2>{item.title}</h2>
                </div>
                <div className="cur-catalog__text">
                    <p>{item.subScribtion}</p>
                </div>
                <div className="about__link">
                    <Link to={`/catalog${item.link}`} onClick={handleClick}>ПЕРЕЙТИ В РАЗДЕЛ</Link>
                </div>
            </div>
        </div>
    )
}
