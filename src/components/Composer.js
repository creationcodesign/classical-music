import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import data from '../assets/data/data.js'


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
                            <div className="content-info info-birth">
                                <div className="info__birth-place">{el.birthPlace}</div>
                                <div className="info__birth-date">{el.birthDate}</div>
                            </div>
                            <div className="composer-content__music">{el.musicName}</div>
                        </div>
                        <div className="container-gem">
                            <img src={require(`../assets/img/${el.noteSheet}`)} alt={el.musicName} width="250" className="container-gem__img" />
                        </div>
                    </div>
                    <div className="player">
                        <audio controls id="audio" >
                            <source src={require(`../assets/music/${el.musicSrc}`)} type="audio/mpeg" />
                        </audio>
                    </div>
                </div>
            ))}
        </div>
    )
}
