import React from 'react'
import '../styles/index.sass'

import { Link } from 'gatsby'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Strona Główna</Link></li>
                <li><Link to='/oferta'>Oferta</Link></li>
                <li><Link to='/contact'>Kontakt</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
            </ul>
        </nav>
    )
}

export default Nav