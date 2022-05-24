import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <NavLink to="/" className="link">
                <h1>Classical Music</h1>
            </NavLink>
        </header>
    )
}
