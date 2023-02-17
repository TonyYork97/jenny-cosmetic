import React from "react";
import { useRef } from "react";
import { GrClose } from 'react-icons/gr'
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSort } from "../../redux/filter/reducer";
import { filterToFace, setAllCatalog } from "../../redux/goods/reducer";
import { useCallback } from "react";
import { useState } from "react";
import './filter-catalog.scss';


export const sortArr = [
    { title: 'умолчанию', sortBy: 'id' },
    { title: 'названию : А-Я', sortBy: 'title' },
    { title: 'названию : Я-А', sortBy: '-title' },
    { title: 'цене: возростание', sortBy: 'price' },
    { title: 'цене: убывание', sortBy: '-price' }
];
const categoriesArr = ['все товары', 'уход для лица', 'уход для тела', 'уход для волос', 'макияж', 'подарочные наборы'];

export const FilterCatalog = ({ count, categories, onChangeCategories, setSearchValue, searchValue }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const dispatch = useDispatch();
    const onChangeSort = (sort) => {
        dispatch(setSort(sort))
    }

    const onClickClear = () => {
        setValue('');
        setSearchValue('');
        inputRef.current.focus();
    }

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 300),
        []
    )

    const onChangeInput = event => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }




    return (
        <div className="filter-catalog">



            <div className="sort-search-block">
                <div className="filter-catalog__search">
                    <input ref={inputRef} placeholder="Поиск товаров..." type="text" onChange={(event) => onChangeInput(event)} value={value} />
                    {searchValue && <GrClose onClick={onClickClear} size={20} className='filter-catalog__close' />}
                </div>
                <div className="filter-catalog__sort">
                    <span className="white">Сортировать по</span>
                    <select name="sort" onChange={(event) => onChangeSort(event.target.value)}>
                        {sortArr.map((item, i) => <option key={item.title} value={item.sortBy}>{item.title}</option>)}
                    </select>
                </div>

            </div>
            <ul className="filter-catalog__category">
                {categoriesArr.map((item, i) => <li onClick={() => onChangeCategories(item)} key={i} className={categories === item ? 'filter-catalog__active' : ''}>{item}
                    {/* {categories === item ? <span>{count}</span> : ''} */}
                </li>)}
            </ul>
        </div>
    )
}