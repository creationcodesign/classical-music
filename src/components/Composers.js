import React, { useState } from 'react'
import data from '../assets/data/data.js'
import Composer from './Composer.js'

export default function Composers() {
    const [composers] = useState(data)

    return (
        <ul className="composer-list">
            {composers.map(data => {
                return <Composer key={data} data={data} />
            })}
        </ul>
    )
}
