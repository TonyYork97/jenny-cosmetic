import React, { useEffect, useState, useCallback, useRef } from "react";
import { BackHeader } from "../../components/back-header";
import { Pagination } from "../../components/pagination";
import { ListCatalog } from "../../components/list-catalog";
import { CatalogTitle } from "../../components/catalog-title";
import { FilterCatalog } from "../../components/filter-catalog";
import qs from 'qs';
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setCurrentPage, setFilters } from "../../redux/filter/reducer";
import { fetchGoods } from "../../redux/goods/reducer";
import { useNavigate } from "react-router-dom";
import './all-catalog.scss'

export const AllCatalog = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isSearch = useRef(false)
    const isMounted = useRef(false)

    const [count, setCount] = useState(0);
    const [searchValue, setSearchValue] = useState('');

    const { categories, sortBy, currentPage } = useSelector((state) => state.filter);
    const { items, status } = useSelector(state => state.goods);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onChangeCategories = useCallback((id) => {
        dispatch(setCategory(id))
        dispatch(setCurrentPage(1))

    }, [])

    const changeCurrentPage = useCallback((page) => {
        dispatch(setCurrentPage(page));
    })

    useEffect(() => {
        if (window.location.search && window.location.search !== '?sortBy=id&categories=%D0%B2%D1%81%D0%B5%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D1%8B&currentPage=1') {
            const params = qs.parse(window.location.search.substring(1));
            dispatch(setFilters({
                ...params
            }),
            );
            isSearch.current = true;
        }
    }, [])

    const getGoods = async () => {
        const category = categories !== 'все товары' ? `category=${categories}` : '';
        const sortSelect = sortBy === '' ? '' : `sortBy=${sortBy.replace('-', '')}`
        const order = sortBy.includes('-') ? 'desc' : 'asc';
        const searchVal = searchValue ? `&search=${searchValue}` : '';

        dispatch(fetchGoods({
            category,
            sortSelect,
            order,
            searchVal,
            currentPage
        }))
    }

    useEffect(() => {
        if (!isSearch.current) {
            getGoods();
        }
        isSearch.current = false;
    }, [categories, sortBy, searchValue, currentPage])

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortBy,
                categories,
                currentPage
            });
            navigate(`?${queryString}`)

            // params()
        }
        isMounted.current = true;
    }, [categories, sortBy, currentPage])

    return (
        <div className="all-catalog">
            <div className="wrapper">
                <BackHeader />
                <CatalogTitle />
                <div className="all-catalog__block">
                    <FilterCatalog
                        count={count}
                        categories={categories}
                        onChangeCategories={onChangeCategories}
                        setSearchValue={setSearchValue}
                        searchValue={searchValue}
                    />
                    <div className="list-catalog-block">
                        <ListCatalog items={items} status={status} />
                        <Pagination currentPage={currentPage} onChangePage={changeCurrentPage} />
                    </div>
                </div>

            </div>
        </div>
    )
}