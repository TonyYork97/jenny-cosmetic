import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentCatalog } from "../../redux/current-catalog/reducer";
// import Test from '../../assets/categories/category-1.jpg'
import './home-category.scss';


export const HomeCategory = ({ item, status }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentCatalog({
            title: item.title,
            subScribtion: item.subScribtion,
            subTitle: item.subTitle
        }))
    }

    return (
        <div className="home-category">
            <Link to={`/catalog${item.link}`} onClick={handleClick} className="home-category__image-link">
                <div className="home-category__image" style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    borderRadius: '50%'
                }}>
                    {/* <img src={image} alt="" /> */}
                    {/* <img src={Test} alt="" /> */}
                </div>
            </Link>
            <Link to={`/catalog${item.link}`} onClick={handleClick} className="home-category__title-link">
                {item.title}
            </Link>
        </div>
    )
}