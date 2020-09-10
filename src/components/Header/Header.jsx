import React from 'react';
import './Header.scss';

const Header = () => {
	return(
		<div className="header">
			<div className="header__logo"></div>
			<div className="header__title">Первомайская</div>
			<nav className="header__navigation">
				<span className="header__navigation-item header__navigation-item_active">О комплексе</span>
				<a href="http://mock-address/change-me" className="header__navigation-item">Особенности</a>
				<a href="http://mock-address/change-me" className="header__navigation-item">Пентхаусы</a>
				<a href="http://mock-address/change-me" className="header__navigation-item">Выбрать квартиру</a>
			</nav>
			<a href="tel:8 888 888 88 88" className="header__phone">8 888 888 88 88</a>
			<div className="header__image"></div>
		</div>
	);
}

export default Header;