import React from "react";
import { ListItem } from "../list-item";
import { Skeleton } from "../skeleton";

import './list-catalog.scss';

export const ListCatalog = ({ items, status, skeletonCount = 9 }) => {

    const skeleton = [...new Array(skeletonCount)].map((_, i) => <Skeleton key={i} />)
    const listItem = items.map(item => <ListItem key={item.id} item={item} />)

    return (
        <>
            {status === 'error' && !items.length
                ? <div className="list-catalog">{skeleton}</div>
                : <div className="list-catalog">
                    {status === 'loading' ? skeleton : listItem}

                </div>}
        </>
    )
}