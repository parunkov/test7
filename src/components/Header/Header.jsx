import React, {useState, useEffect} from 'react';
import './Header.scss';
import {Transition} from 'react-transition-group';

const NavigationItem = ({text, id, activeItem, setActiveItem, delta, setDelta}) => {
	const onHover = () => {
		const deltaItems = id - activeItem;
		setDelta(deltaItems);
	}
	return(
		<span className="header__navigation-item-wrapper">
			<a href="#" className={id === activeItem ? "header__navigation-item header__navigation-item_active" : "header__navigation-item"} onClick={() => setActiveItem(id)} onMouseEnter={onHover} onMouseLeave={() => {}}>{text}

			</a>
			{/*<span className="header__navigation-border-wrapper">
				<CSSTransition
					in={underlinedItem}
					timeout={300}
					classNames="header__navigation-border"
					unmountOnExit
					onEnter={() => {}}
					onExited={() => {}}
				>
					<span className="header__navigation-border"></span>
				</CSSTransition>
			</span>*/}
		</span>
	);
}

const Header = () => {
	const [activeItem, setActiveItem] = useState(1);
	const [delta, setDelta] = useState(0);
	const [startLeft, setStartLeft] = useState(0);
	const [startRight, setStartRight] = useState(468.2);
	const [left, setLeft] = useState(0);
	const [right, setRight] = useState(468.2);
	useEffect(() => {
		let left = 0;
		let right = 104.2;
		let startLeft = 0;
		let startRight = 104.2;
		switch (activeItem) {
			case 2: 
				startLeft = 147.2;
				startRight = 314.4;
				switch (delta) {
					case -1: 
						left = 0;
						right = 314.4;
						break;
					case 1: 
						left = 147.2;
						right = 182;
						break;
					case 2: 
						left = 147.2;
						right = 0;
						break;
					default: 
						left = 147.2;
						right = 314.4;
						break;
				}
			break;
			case 3: 
				startLeft = 301;
				startRight = 182;
				switch (delta) {
					case -2: 
						left = 0;
						right = 182;
						break;
					case -1: 
						left = 147.2;
						right = 182;
						break;
					case 1: 
						left = 301;
						right = 0;
						break;
					default: 
						left = 301;
						right = 182;
						break;
				}
			break;
			case 4: 
				startLeft = 433.4;
				startRight = 0;
				switch (delta) {
					case -3: 
						left = 0;
						right = 0;
						break;
					case -2: 
						left = 147.2;
						right = 0;
						break;
					case -1: 
						left = 301;
						right = 0;
						break;
					default: 
						left = 433.4;
						right = 0;
						break;
				}
			break;
			default: 
				startLeft = 0;
				startRight = 468.2;
				switch (delta) {
					case 1: 
						left = 0;
						right = 314.4;
						break;
					case 2: 
						left = 0;
						right = 182;
						break;
					case 3: 
						left = 0;
						right = 0;
						break;
					default: 
						left = 0;
						right = 468.2;
						break;
				}
		}
		setStartLeft(startLeft);
		setStartRight(startRight);
		setLeft(left);
		setRight(right);
	},[delta, activeItem]);

	const duration = 300;

	const defaultStyle = delta < 0 ? 
	{
		// transition: `right ${duration}ms`,
		transition: `left ${duration}ms`,
		left: startLeft,
		right: startRight,
	} :
	{
		transition: `right ${duration}ms`,
		// transition: `left ${duration}ms`,
		left: startLeft,
		right: startRight,
	} 

	const transitionStyles = {
		entering: { left: startLeft, right: startRight },
		entered:  { left: left, right: right },
		exiting:  { left: left, right: right },
		exited:  { left: startLeft, right: startRight },
	};

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
				/>
				<NavigationItem 
					id={2} 
					text="Особенности" 
					activeItem={activeItem} 
					setActiveItem={setActiveItem}
					delta={delta}
					setDelta={setDelta} 
				/>
				<NavigationItem 
					id={3} 
					text="Пентхаусы" 
					activeItem={activeItem} 
					setActiveItem={setActiveItem} 
					delta={delta}
					setDelta={setDelta}
				/>
				<NavigationItem 
					id={4} 
					text="Выбрать квартиру" 
					activeItem={activeItem} 
					setActiveItem={setActiveItem} 
					delta={delta}
					setDelta={setDelta}
				/>
				<Transition in={delta} timeout={duration}>
					{state => (
						<div className="header__border" style={{
							...defaultStyle,
							...transitionStyles[state]
						}}></div>
					)}
				</Transition>
				{/*<div className="header__border"></div>*/}
			</nav>
			<a href="tel:8 888 888 88 88" className="header__phone">8 888 888 88 88</a>
			<div className="header__image"></div>
		</div>
	);
}

export default Header;