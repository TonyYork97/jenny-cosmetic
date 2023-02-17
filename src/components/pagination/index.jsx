import React from 'react'
import ReactPaginate from 'react-paginate';
import './pagination.scss';

export const Pagination = ({ currentPage, onChangePage }) => {
    return (
        <div>
            <ReactPaginate
                className='pagination'
                breakLabel="..."
                nextLabel=">"
                onPageChange={event => onChangePage(event.selected + 1)}
                pageRangeDisplayed={9}
                pageCount={4}
                forcePage={currentPage - 1}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}
