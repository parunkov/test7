import React, {useState} from 'react';
import './Header.scss';

const NavigationItem = ({text, id, hoveredItem, activeItem, setActiveItem, setHoveredItem}) => {
	let isHovered = false;
	if (hoveredItem && hoveredItem !== activeItem) {
		if (id >= activeItem && id <= hoveredItem - 1) {
			isHovered = true;
		} else if (id < activeItem && id >= hoveredItem) {
			isHovered = true;
		}
	}
	return(
		<span className={isHovered ? "header__navigation-item-wrapper header__navigation-item-wrapper_active" : "header__navigation-item-wrapper"}>
			<a href="#" className={id === activeItem ? "header__navigation-item header__navigation-item_active" : "header__navigation-item"} onClick={() => setActiveItem(id)} onMouseEnter={() => setHoveredItem(id)} onMouseLeave={() => setHoveredItem(0)}>{text}</a>
			<span className="header__navigation-border-wrapper">
				<span className="header__navigation-border"></span>
			</span>
		</span>
	);
}

const Header = () => {
	const [activeItem, setActiveItem] = useState(1);
	const [hoveredItem, setHoveredItem] = useState(0);
	return(
		<div className="header">
			<div className="header__logo"></div>
			<div className="header__title">Первомайская</div>
			<nav className="header__navigation">
				<NavigationItem id={1} text="О комплексе" hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} activeItem={activeItem} setActiveItem={setActiveItem} />
				<NavigationItem id={2} text="Особенности" hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} activeItem={activeItem} setActiveItem={setActiveItem} />
				<NavigationItem id={3} text="Пентхаусы" hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} activeItem={activeItem} setActiveItem={setActiveItem} />
				<NavigationItem id={4} text="Выбрать квартиру" hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} activeItem={activeItem} setActiveItem={setActiveItem} />
			</nav>
			<a href="tel:8 888 888 88 88" className="header__phone">8 888 888 88 88</a>
			<div className="header__image"></div>
		</div>
	);
}

export default Header;