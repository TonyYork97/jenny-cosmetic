import React, { useEffect, useState, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './carousel.css'

const PAGE_WIDTH = 100;
const TRANSITION_DURATION = 500;

const Carousel = ({ children, infinite }) => {

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(-100);
    const [transitionDuration, setTransitionDuration] = useState(TRANSITION_DURATION);
    const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 })

    useEffect(() => {
        if (infinite) {
            setPages([
                cloneElement(children[Children.count(children) - 1]),
                ...children,
                cloneElement(children[0])
            ])
            setClonesCount({ head: 1, tail: 1 })
            return
        }
        setPages(children)
    }, [children, infinite])

    useEffect(() => {
        // if (transitionDuration === 0) {
        //     setTimeout(() => {
        //         setTransitionDuration(TRANSITION_DURATION)
        //     }, TRANSITION_DURATION)
        // }
    }, [transitionDuration])

    useEffect(() => {
        if (!infinite) return

        if (offset === 0) {
            // setTimeout(() => {
            //     setTransitionDuration(0)
            //     setOffset(-(PAGE_WIDTH * (pages.length - 1 - clonesCount.tail)))
            // }, TRANSITION_DURATION)
            return
        }
        if (offset === -(PAGE_WIDTH * (pages.length - 1))) {
            // setTimeout(() => {
            //     setTransitionDuration(0)
            //     setOffset(-(clonesCount.head * PAGE_WIDTH))
            // }, TRANSITION_DURATION)
            return
        }
    }, [infinite, offset, PAGE_WIDTH, pages, clonesCount])

    const handleLeftArrowClick = () => {
        // console.log('left');
        setOffset(currentOffset => {
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset, 0);
        })

    }

    useEffect(() => {
        // let flagInterval = setInterval(() => {
        //     setOffset((currentOffset) => {
        //         const newOffset = currentOffset - PAGE_WIDTH;
        //         // console.log(newOffset);

        //         const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
        //         return Math.max(newOffset, maxOffset);
        //     })
        // }, 7000);

        // return () => clearInterval(flagInterval);

    })


    const handleRightArrowClick = () => {
        // console.log('right');
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            // console.log(newOffset);

            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            return Math.max(newOffset, maxOffset);
        })
    }

    // useEffect(() => {
    //     setPages(
    //         Children.map(children, (child) => {
    //             return cloneElement(child, {
    //                 style: {
    //                     height: `100%`,
    //                     minWidth: `${PAGE_WIDTH}%`,
    //                     maxWidth: `${PAGE_WIDTH}%`,

    //                 }
    //             })
    //         })
    //     );
    // }, [])

    return (
        <div className="main-container">
            <FaChevronLeft className="arrow" onClick={handleLeftArrowClick} />
            <FaChevronRight className="arrow arrow-right" onClick={handleRightArrowClick} />
            <div className="window">
                <div className="all-pages-container"
                    style={{
                        transitionDuration: `${transitionDuration}ms`,
                        transform: `translateX(${offset}%)`
                    }}
                >
                    {pages}
                </div>
            </div>

        </div>
    )
}