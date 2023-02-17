import React from 'react'
import woman from '../../../assets/woman.png'
import Like from '../../../assets/icons/like.svg'
import Recycle from '../../../assets/icons/recycle.svg'
import Mineral from '../../../assets/icons/mineral.svg'
import Truck from '../../../assets/icons/truck.svg'

export const AboutImage = () => {
    return (
        <div className="about__info-image">
            <div className="about__image">
                <img src={woman} alt="woman" />
            </div>
            <div className="about__info">
                <div className="about__info-item">
                    <div className="about__info-icon about__recycle">
                        <img src={Recycle} alt="recycle" />
                    </div>
                    <div className="about__info-text">
                        УПАКОВКА ПРИГОДНА ДЛЯ ВТОРИЧНОЙ ПЕРЕРАБОТКИ
                    </div>
                </div>
                <div className="about__info-item">
                    <div className="about__info-icon">
                        <img src={Mineral} alt="mineral" />
                    </div>
                    <div className="about__info-text">
                        НАТУРАЛЬНЫЕ ЦЕЛЬНЫЕ МИНЕРАЛЫ
                    </div>
                </div>
                <div className="about__info-item">
                    <div className="about__info-icon">
                        <img src={Like} alt="like" />
                    </div>
                    <div className="about__info-text">
                        ПРЕМИАЛЬНОЕ КАЧЕСТВО
                    </div>
                </div>
                <div className="about__info-item">
                    <div className="about__info-icon about__truck">
                        <img src={Truck} alt="truck" />
                    </div>
                    <div className="about__info-text">
                        БЫСТРАЯ ДОСТАВКА
                    </div>
                </div>
            </div>
        </div>
    )
}
