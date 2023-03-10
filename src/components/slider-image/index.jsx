import React, { useEffect } from "react";
import { Carousel } from 'react-responsive-carousel'
import Bg1 from '../../assets/sliders/slider-bg-1.jpg'
import Bg2 from '../../assets/sliders/slider-bg-2.jpg'
import Bg3 from '../../assets/sliders/slider-bg-6.jpg'
import Bg4 from '../../assets/sliders/slider-bg-4.jpg'
import Bg5 from '../../assets/sliders/slider-bg-5.jpg'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCatalog } from "../../redux/current-catalog/reducer";
import './slider-image.scss';
// style for carousel
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const img = [Bg1, Bg2, Bg3, Bg4, Bg5]

export const SliderImage = () => {
    const { items, status } = useSelector(state => state.catalog);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentCatalog({}))
    }

    return (
        <>
            <div className="main-container">
                <div className="window">
                    <div className="all-pages-container">
                        {items.length &&
                            <Carousel
                                autoPlay={true}
                                emulateTouch={true}
                                infiniteLoop={true}
                                stopOnHover={false}
                                showThumbs={false}
                                showStatus={false}
                            >
                                {items.map((el, i) => (
                                    <div className="bg-block" key={el.title} >
                                        <div className="slider-text">
                                            <div className="slider-text-block">
                                                <h2 className="f-mak">{el.title}</h2>
                                                <p>{el.subScribtion}</p>
                                                <Link
                                                    className="link"
                                                    to={`/catalog${el.link}`}
                                                    onClick={handleClick}>
                                                    ?????????????? ?? ????????????
                                                </Link>
                                            </div>
                                            <img src={img[i]} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}