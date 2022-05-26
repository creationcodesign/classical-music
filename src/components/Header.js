import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <NavLink to="/" className="link header__link">
                <h1 className='header__title'>Classical Music</h1>
            </NavLink>
            <div className="header-overlay"></div>
        </header>
    )
}
