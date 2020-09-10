import React from 'react';
import './About.scss';

const About = ({id, items}) => {
	return(
		<div className="about">
			<div className="about__navigation">
				<div className="about__nawigation-item-wrapper">
					<div className={id === 1 ? "about__navigation-item about__navigation-item_active" : "about__navigation-item"}>Архитектура</div>
				</div>
				<div className="about__nawigation-item-wrapper">
					<div className={id === 2 ? "about__navigation-item about__navigation-item_active" : "about__navigation-item"}>Благоустройство</div>
				</div>
				<div className="about__nawigation-item-wrapper">
					<div className={id === 3 ? "about__navigation-item about__navigation-item_active" : "about__navigation-item"}>Безопастность</div>
				</div>
				<div className="about__nawigation-item-wrapper">
					<div className={id === 4 ? "about__navigation-item about__navigation-item_active" : "about__navigation-item"}>Инженерия</div>
				</div>
				<div className="about__nawigation-item-wrapper">
					<div className={id === 5 ? "about__navigation-item about__navigation-item_active" : "about__navigation-item"}>Инфраструктура</div>
				</div>
				<div className="about__nawigation-item-wrapper">
					<div className={id === 6 ? "about__navigation-item about__navigation-item_active" : "about__navigation-item"}>Транспортная доступность</div>
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
			<div className="about__image">
				<img src={items[id - 1].image} alt={items[id - 1].title} />
			</div>
		</div>
	);
}

export default About;