import React, {useState, useEffect} from 'react';
import './Header.scss';

const NavigationItem = ({text, id, activeItem, setActiveItem, delta, setDelta, underlinedItem}) => {
	// console.log(underlinedItem);
	// console.log(underlined);
	const onHover = () => {
		const deltaItems = id - activeItem;
		setDelta(deltaItems);
	}
	return(
		<span className="header__navigation-item-wrapper">
			<a href="#" className={id === activeItem ? "header__navigation-item header__navigation-item_active" : "header__navigation-item"} onClick={() => setActiveItem(id)} onMouseEnter={onHover} onMouseLeave={() => {}}>{text}

			</a>
			<span className="header__navigation-border-wrapper">
				{underlinedItem && <span className="header__navigation-border"></span>}
			</span>
		</span>
	);
}

const Header = () => {
	const [activeItem, setActiveItem] = useState(1);
	const [delta, setDelta] = useState(0);
	const underlinedItems = [false, false, false, false];
	const [underlined, setUnderlined] = useState(underlinedItems);
	useEffect(() => {
		const underlinedClone = [false, false, false, false];
		if (delta) {
			if (delta > 0) {
				for (let i = 0; i < delta; i += 1) {
					const setUnderlinedItems = () => {
						underlinedClone[activeItem - 1 + i] = true;
						setUnderlined([...underlinedClone]);
					}
					setTimeout(setUnderlinedItems, 500 * i);
				}
			} else {
				for (let i = 0; i < Math.abs(delta); i += 1) {
					const setUnderlinedItems = () => {
						underlinedClone[activeItem - 2 - i] = true;
						setUnderlined([...underlinedClone]);
					}
					setTimeout(setUnderlinedItems, 500 * i);
				}	
			}
		}
	},[delta]);
	return(
		<div className="header">
			<div className="header__logo"></div>
			<div className="header__title">Первомайская</div>
			<nav className="header__navigation">
				<NavigationItem 
					id={1} 
					text="О комплексе" 
					activeItem={activeItem} 
					setActiveItem={setActiveItem} 
					delta={delta}
					setDelta={setDelta}
					underlinedItem={underlined[0]}
				/>
				<NavigationItem 
					id={2} 
					text="Особенности" 
					activeItem={activeItem} 
					setActiveItem={setActiveItem}
					delta={delta}
					setDelta={setDelta} 
					underlinedItem={underlined[1]}
				/>
				<NavigationItem 
					id={3} 
					text="Пентхаусы" 
					activeItem={activeItem} 
					setActiveItem={setActiveItem} 
					delta={delta}
					setDelta={setDelta}
					underlinedItem={underlined[2]}
				/>
				<NavigationItem 
					id={4} 
					text="Выбрать квартиру" 
					activeItem={activeItem} 
					setActiveItem={setActiveItem} 
					delta={delta}
					setDelta={setDelta}
					underlinedItem={underlined[3]}
				/>
			</nav>
			<a href="tel:8 888 888 88 88" className="header__phone">8 888 888 88 88</a>
			<div className="header__image"></div>
		</div>
	);
}

export default Header;