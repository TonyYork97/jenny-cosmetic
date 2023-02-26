import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { HomeCategory } from '../home-category';
import { ListCatalog } from '../list-catalog';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGoodsFiltered } from '../../redux/goods/reducer';
import { fetchCatalog } from '../../redux/catalog/reducer';
import { setCurrentCatalog } from '../../redux/current-catalog/reducer';
import './current-catalog.scss';

export const CurrentCatalog = () => {
    const [filterCatalog, setFilterCatalog] = useState([])
    const currentPage = useSelector(state => state.currentCatalog.currentCatalog)
    const { items, status } = useSelector(state => state.goods);
    const { items: catalogItems, status: catalogStatus } = useSelector(state => state.catalog);
    const { title } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCatalog())
    }, []);


    useEffect(() => {
        window.scrollTo(0, 0)

        if (catalogItems.length) {
            let filterCatalog = catalogItems.filter(item => {
                if (item.title !== currentPage.title) return true;
            });
            setFilterCatalog(filterCatalog)
            if (!currentPage?.title) {
                let obj = catalogItems.find((el) => {
                    return el.link.includes(title)
                })
                dispatch(setCurrentCatalog({
                    title: obj.title,
                    subScribtion: obj.subScribtion,
                    subTitle: obj.subTitle
                }))
            }
        }
    }, [catalogItems, currentPage]);

    useEffect(() => {
        if (currentPage?.title) {
            dispatch(fetchGoodsFiltered({ currentPage: currentPage.title }))
        }
    }, [currentPage]);

    return (
        <div className='cur-catalog'>
            <div className="wrapper">
                <div className="cur-catalog__title-block">
                    <div className="cur-catalog__subtitle">
                        <h5 className='white'>{currentPage.subTitle}</h5>
                    </div>
                    <div className="cur-catalog__block">
                        <div className="cur-catalog__left">
                            <div className="cur-catalog__title">
                                <h2 className='white f-mak'>{currentPage.title}</h2>
                            </div>
                            <div className="cur-catalog__text">
                                <p className='white'>
                                    {currentPage.subScribtion}
                                </p>
                            </div>
                        </div>
                        <div className="product-category__category">
                            {filterCatalog.length
                                ? filterCatalog.map(item => <HomeCategory key={item.title} item={item} />)
                                : ''
                            }
                        </div>
                    </div>
                </div>
                <div className="cur-catalog__items">
                    <ListCatalog items={items} status={status} />
                </div>
            </div>
        </div>
    )
}
