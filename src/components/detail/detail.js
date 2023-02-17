import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setCurrentGoods } from "../../redux/current-goods/reducer";

export const Detail = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const handleClick = () => {
    //     dispatch(setCurrentGoods(item));
    //     navigate(`/goods/${item.title}`);
    // }
    return (
        <Link className='btn-detail' to={`/goods/${item.id}`}>
            <div className="list-item__link" >
                <button>Подробнее</button>
            </div>
        </Link>
    )
}
