import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import data from '../assets/data/data.js'
import gemImg from '../assets/img/img.png'

export default function Composer() {
    const [composers] = useState(data)
    const { name } = useParams();

    return (
        <div className='page'>
            {composers.filter(p => p.lastName === name).map(el => (
                <div className="composer-container" key={el.id}>
                    <div className="composer-content">
                        <div className="composer-content__portrait">
                            <img src={require(`../assets/img/${el.portrait}`)} alt={el.lastName} className="composer-img" width={280} />
                        </div>
                        <div className="content-info">
                            <div className="content-info__name">
                                <h2>{el.lastName}</h2>
                                <h3>{el.firstName}</h3>
                            </div>
                            <div className="content-info">
                                <div className="content-info__birth-place">{el.birthPlace}</div>
                                <div className="content-info__birth-date">{el.birthDate}</div>
                            </div>
                            <div className="composer-content__music">music</div>
                        </div>
                        <div className="container-gem">
                            <img src={gemImg} alt="gem" width="250" className="container-gem__img" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
