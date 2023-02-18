import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentCatalog } from "../../redux/current-catalog/reducer";
import Face from '../../assets/categories/face.jpg'
import Hair from '../../assets/categories/hair.jpg'
import Makeup from '../../assets/categories/makeup.jpg'
import Sertificat from '../../assets/categories/sertificat.jpg'
import Skin from '../../assets/categories/skin.jpg'
import './home-category.scss';


const imageLink = {
    face: Face,
    hair: Hair,
    makeup: Makeup,
    sertificat: Sertificat,
    skin: Skin
}

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
                <div className="home-category__image" >
                    <img src={imageLink[item.image]} alt="" />
                </div>
            </Link>
            <Link to={`/catalog${item.link}`} onClick={handleClick} className="home-category__title-link">
                {item.title}
            </Link>
        </div>
    )
}