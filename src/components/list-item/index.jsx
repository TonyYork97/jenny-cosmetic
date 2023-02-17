import React from "react";
import { ButtonFavorite } from "../button-favorite";
import { Button } from "../button-to-cart";
import { Detail } from "../detail/detail";
import { Link } from "react-router-dom";
import './list-item.scss';

export const ListItem = ({ item }) => {
    return (
        <div className="list-item">
            <div className="list-item__flex">
                <ButtonFavorite item={item} />
                <Link to={`/goods/${item.id}`}>
                    <div className="list-item__image">
                        <img src={item.image} alt="" />
                    </div>
                </Link>
                <div className="list-item__title__text">
                    <div className="list-item__title">
                        <Link to={`/goods/${item.id}`}>
                            <h6 className="white">{item.title}</h6>
                        </Link>
                    </div>
                    <div className="list-item__price">
                        <p className="white">{item.price} <span>руб.</span></p>
                        <div className="list-item__block">
                            <Detail item={item} />
                            <span className="list-item__divide">|</span>
                            <Button item={item} />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}