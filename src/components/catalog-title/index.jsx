import React from "react";
import './catalog-title.scss'

export const CatalogTitle = () => {
    return (
        <div className="catalog-title">
            <div className="catalog-title__title">
                <h5 className="white">catalog</h5>
            </div>
            <div className="catalog-title__block">
                <div className="catalog-title__left-title ">
                    <h2 className="f-mak white">Каталог товаров</h2>
                </div>
                <div className="catalog-title__right">
                    <p className="white">ЗДЕСЬ ВЫ МОЖЕТЕ ОЗНАКОМИТСЯ СО ВСЕМИ ТОВАРАМИ НАШЕГО ИНТЕРНЕТ МАГАЗИНА И ВОСПОЛЬЗОВАТЬСЯ УДОБНЫМИ ФИЛЬТРАМИ</p>
                </div>
            </div>
        </div>
    )
}