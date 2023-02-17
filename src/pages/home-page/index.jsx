import React, { useEffect } from "react";
import { SliderImage } from "../../components/slider-image";
import { ProductCategory } from "../../components/product-category";
import { Bestsellers } from "../../components/bestsellers";
import { useDispatch } from 'react-redux';
import { HomeAbout } from "../../components/about/home-about";
import './home-page.scss';
import { fetchCatalog } from "../../redux/catalog/reducer";

export const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchCatalog())

    }, [])
    return (
        <div className="home-page">
            <SliderImage />
            <ProductCategory />
            <Bestsellers />
            <HomeAbout />
        </div>
    )
}