import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from '../button-to-cart';
import { ButtonFavorite } from '../button-favorite';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './goods.scss';


export const Goods = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [item, setItem] = useState();
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // const item = useSelector(state => state.currentGoods.currentGoods);
    React.useEffect(() => {
        async function getGood() {
            try {
                const { data } = await axios.get('https://62b3031520cad3685c993457.mockapi.io/items/' + id);
                setItem(data);
            } catch {
                alert('Ничего не найдено');
                navigate('/');
            }
        }
        getGood();
    }, [id])

    const goToBack = () => {
        navigate(-1);
    }

    const goToHome = () => {
        navigate('/')
    }

    if (!item) {
        return 'Loading...'
    }

    return (
        <div className='goods'>
            <div className="wrapper">
                <div className="goods__navigation">
                    <span className='goods_nav-span' onClick={goToBack}>назад</span>
                    <span> &#62; </span>
                    <span className='goods_nav-span' onClick={goToHome}>главная</span>
                </div>
                <div className="goods__block">
                    <div className="goods__images">
                        {/* <div className="goods__images-min">
                            <div className="goods__image-min">
                                <img src={`../${item.image}`} alt="" />
                            </div>
                        </div> */}
                        <div className="goods__image">
                            <img src={`../${item.image}`} alt="" />
                        </div>
                    </div>
                    <div className="goods__text">
                        <div className="goods__title">
                            <h4 className='f-mak white'>{item.title}</h4>
                        </div>
                        <div className="goods__price white">
                            <span>{item.price} руб.</span>
                        </div>
                        <div className="goods__action ">
                            <Button item={item} />
                            <div className="goods__favorites">
                                <ButtonFavorite item={item} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
