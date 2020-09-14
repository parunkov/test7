import React, {useState} from 'react';
import './About.scss';
import {Transition} from 'react-transition-group';

const About = ({id, previousId, items, setItemId}) => {
	const [moveDown, setMoveDown] = useState(true);
	const [inProp, setInProp] = useState(false);
	const [background, setBackground] = useState({background: `url(${items[previousId - 1].image}`});
	const duration = 1000;
	const defaultStyle = !moveDown ? 
	{
		background: `url(${items[id - 1].image})`,
		transition: `height ${duration}ms ease-in-out`,
		top: 0,
		left: 0
	} :
	{
		background: `url(${items[id - 1].image}) no-repeat center bottom`,
		transition: `height ${duration}ms ease-in-out`,
		bottom: 0,
		left: 0
	} 
	const transitionStyles = {
		entering: { height: 0 },
		entered:  { height: 840 },
		exiting:  { height: 840 },
		exited:  { height: 840 }
	};
	const onClick = (id) => {
		setItemId(id);
		setInProp(true);
		setMoveDown(!moveDown);
	}

	return(
		<div className="about">
			<div className="about__navigation">
				<div className="about__nawigation-item-wrapper">
					<div className={id === 1 ? "about__navigation-item about__navigation-item_active" : "about__navigation-item"} onClick={() => onClick(1)}>Архитектура</div>
				</div>
				<div className="about__nawigation-item-wrapper">
					<div className={id === 2 ? "about__navigation-item about__navigation-item_active" : "about__navigation-item"} onClick={() => onClick(2)}>Благоустройство</div>
				</div>
				<div className="about__nawigation-item-wrapper">
					<div className={id === 3 ? "about__navigation-item about__navigation-item_active" : "about__navigation-item"} onClick={() => onClick(3)}>Безопастность</div>
				</div>
				<div className="about__nawigation-item-wrapper">
					<div className={id === 4 ? "about__navigation-item about__navigation-item_active" : "about__navigation-item"} onClick={() => onClick(4)}>Инженерия</div>
				</div>
				<div className="about__nawigation-item-wrapper">
					<div className={id === 5 ? "about__navigation-item about__navigation-item_active" : "about__navigation-item"} onClick={() => onClick(5)}>Инфраструктура</div>
				</div>
				<div className="about__nawigation-item-wrapper">
					<div className={id === 6 ? "about__navigation-item about__navigation-item_active" : "about__navigation-item"} onClick={() => onClick(6)}>Транспортная доступность</div>
				</div>
			</div>
			<div className="about__main">
				<div className="about__main-inner">
					<h1 className="about__title">{items[id - 1].title}</h1>
					<div className="about__text-block">
						<span className="about__text">{items[id - 1].text}</span>
						<a href={items[id - 1].link} className="about__link">...</a>
					</div>
					<div className="about__number">{id}/6</div>
				</div>
			</div>
			<div className="about__image-wrapper">
				<div className="about__image-back" style={background}>
				</div>
				<Transition 
					in={inProp} 
					timeout={duration} 
					onEntered={() => setInProp(false)} 
					onExited={() => setBackground({background: `url(${items[id - 1].image})`})}
					mountOnEnter
					unmountOnExit
				>
					{state => (
						<div className="about__image" style={{
							...defaultStyle,
							...transitionStyles[state]
						}}></div>
					)}
				</Transition>
			</div>
		</div>
	);
}

export default About;