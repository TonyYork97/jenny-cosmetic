import React from 'react'
import './zoom-image.css';
import woman from '../../assets/woman.png'

export const ZoomImage = () => {
    return (
        <>
            <div className='zoom-image'>
                <div className="wrapper">
                    <div className="image__image__wrapper">
                        <div className="zoom-image__image"

                        >
                        </div>
                    </div>
                </div>
            </div>

            <div className="video">
                <video autoPlay="autoplay" loop="loop" muted>
                    <source src="images/video/video.mp4" />
                </video>
            </div>
        </>
    )
}
