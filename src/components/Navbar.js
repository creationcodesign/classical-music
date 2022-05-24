import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='nav'>
            <NavLink to="/compositor/Mozart" className="nav__link" activeclassname="nav__link_active">Mozart</NavLink>
            <NavLink to="/compositor/Vivaldi" className="nav__link" activeclassname="nav__link_active">Vivaldi</NavLink>
            <NavLink to="/compositor/Tchaikovsky" className="nav__link" activeclassname="nav__link_active">Tchaikovsky</NavLink>
            <NavLink to="/compositor/Paganini" className="nav__link" activeclassname="nav__link_active">Paganini</NavLink>
            <NavLink to="/compositor/Beethoven" className="nav__link" activeclassname="nav__link_active">Beethoven</NavLink>
        </nav>
    )
}
