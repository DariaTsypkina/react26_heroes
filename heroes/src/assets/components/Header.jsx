import React from 'react';
import Marvel_logo from '../images/Marvel_Logo.png';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <ul className="list">
                    <li className="list__item">База</li>
                    <li className="list__item">
                        <img className="header__logo" src={Marvel_logo} alt="marvel_logo" />
                    </li>
                    <li className="list__item">Супергероев</li>
                </ul>
            </header>
        );
    }
}

export default Header;