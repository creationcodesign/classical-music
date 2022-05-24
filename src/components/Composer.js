import React from 'react'
import gemImg from '../assets/img/img.png'

export default function Composer(props) {
    const { firstName, lastName, portrait, birthPlace, birthDate } = props.data
    return (
        <li className="composer-item">
            <div className="composer-content">
                <div className="composer-content__portrait">
                    <img src={require(`../assets/img/${portrait}`)} alt={lastName} className="composer-img" width={280} />
                </div>
                <div className="composer-content_info">
                    <div className="composer-content__name">
                        <h2>{lastName}</h2>
                        <h3>{firstName}</h3>
                    </div>
                    <div className="composer-content_info">
                        <div className="composer-content__birth-place">{birthPlace}</div>
                        <div className="composer-content__birth-date">{birthDate}</div>
                    </div>
                    <div className="composer-content__music">music</div>
                </div>
                <div className="container-gem">
                    <img src={gemImg} alt="gem" width="250" className="container-gem__img" />
                </div>
            </div>

        </li>
    )
}
