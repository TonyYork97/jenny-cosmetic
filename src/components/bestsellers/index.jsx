import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ListCatalog } from '../list-catalog';
import './bestsellers.scss';

export const Bestsellers = () => {
    const [items, setItem] = useState([]);
    const [status, setStatus] = useState('loading');

    const fetchBest = async () => {
        try {
            const { data } = await axios.get(`https://62b3031520cad3685c993457.mockapi.io/items?sortBy=price&order=asc&page=1&limit=3`);
            setItem(data);
            setStatus('success');
        } catch (error) {
            setStatus('error');
        }

    }


    useEffect(() => {
        setStatus('loading')
        fetchBest();
    }, [])



    return (
        <div className='bestsellers'>
            <div className="wrapper">
                <div className="bestsellers__header">
                    <div className="bestsellers__subscription">
                        <h5 className="title__h5 black">TOP SALES</h5>
                    </div>
                    <div className="bestsellers__title ">
                        <h2 className='f-mak'>БЕСТСЕЛЛЕРЫ</h2>
                    </div>
                    <div className="bestsellers__text">
                        ПЕРЕХОДИТЕ В НАШ КАТАЛОГ, ЧТОБЫ ОЗНАКОМИТЬСЯ С ПОЛНЫМ АССОРТИМЕНТОМ
                    </div>
                </div>
                <div className="bestsellers__goods">
                    <ListCatalog skeletonCount={3} items={items} status={status} />
                </div>
            </div>
        </div>
    )
}
