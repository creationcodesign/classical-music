import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import data from '../assets/data/data.js'

export default function Home() {
    const [composers] = useState(data)
    const composer = composers.map(el => {
        return (
            <NavLink to={`/compositor/${el.lastName}`} className="content__link" key={el.id}>
                <img src={require(`../assets/img/${el.portrait}`)} alt={el.lastName} className="composer-img" height={200} />
                <h3>{el.lastName}</h3>
            </NavLink>
        )
    })

    return (
        <div className='page home'>
            <h2 className='home__title'>
                <br></br>
                <span className='accent'>5 famouse composers</span>
            </h2>
            <div className='home__content'>
                {composer}
            </div>
        </div>
    )
}
