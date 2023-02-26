import React from "react";
import { HomeCategory } from "../home-category";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './product-category.scss';

export const ProductCategory = () => {
    const { items, status } = useSelector(state => state.catalog);


    return (
        <div className="product-category">
            <div className="wrapper">
                <div className="product-category__title">
                    <h5 className="title__h5 white">category</h5>
                </div>
                <div className="product-category__block">
                    <div className="product-category__left-title">
                        <h2 className="f-mak pink">Категории товаров</h2>
                    </div>
                    <div className="product-category__category">
                        {items.length
                            ? items.map(item => <HomeCategory key={item.title} item={item} status={status} />)
                            : ''
                        }
                    </div>
                </div>
                <div className="product-category__low-block">
                    <div className="product-category__text">
                        <p>ПЕРЕХОДИТЕ В НАШ КАТАЛОГ, ЧТОБЫ ОЗНАКОМИТЬСЯ С ПОЛНЫМ АССОРТИМЕНТОМ</p>
                    </div>
                    <div className="product-category__button">
                        <Link to="/all-catalog" className="product-category__link">Все товары</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}