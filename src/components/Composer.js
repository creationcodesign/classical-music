import React from 'react'

export default function Composer(props) {
    const { firstName, lastName, portrait, birthPlace, birthDate } = props.data
    return (
        <li className="composer-item">
            <div className="composer-content">
                <div className="composer-content__portrait">
                    <img src={require(`../assets/img/${portrait}`)} alt={lastName} className="composer-img" width={200} />
                </div>
                <div className="composer-content__name">
                    <h2>{lastName}</h2>
                    <h3>{firstName}</h3>
                </div>
                <div className="composer-content__birth-place">{birthPlace}</div>
                <div className="composer-content__birth-date">{birthDate}</div>
            </div>
        </li>
    )
}
