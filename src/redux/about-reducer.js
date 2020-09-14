import architecture from '../images/architecture.jpg';
import engineering from '../images/engineering.jpg';
import infrastructure from '../images/infrastructure.jpg';
import landscaping from '../images/landscaping.jpg';
import security from '../images/security.jpg';
import transport from '../images/transport.jpg';

const SET_ITEM_ID = 'about/SET_ITEM_ID';

const aboutItems = [
	{
		id: 1,
		title: 'Архитектура',
		text: 'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни',
		image: architecture,
		link: 'http://mock-address/change-me'
	},
	{
		id: 2,
		title: 'Благоустройство',
		text: 'Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом',
		image: landscaping,
		link: 'http://mock-address/change-me'
	},
	{
		id: 3,
		title: 'Безопасность',
		text: 'Современный двор европейского уровня — территория для детей, игр на свежем воздухе и вечерних',
		image: security,
		link: 'http://mock-address/change-me'
	},
	{
		id: 4,
		title: 'Инженерия',
		text: 'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни',
		image: engineering,
		link: 'http://mock-address/change-me'
	},
	{
		id: 5,
		title: 'Инфраструктура',
		text: 'Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса',
		image: infrastructure,
		link: 'http://mock-address/change-me'
	},
	{
		id: 6,
		title: 'Транспортная доступность',
		text: 'Жилой комплекс «Первомайска» расположен в престижном Академическом районе',
		image: transport,
		link: 'http://mock-address/change-me'
	}
];

const initialState = {
	currentItemId: 1,
	items: aboutItems,
	previousItemId: 1
}

const aboutReducer  = (state = initialState, action) => {
	switch (action.type) {
		case SET_ITEM_ID: {
			return {
				...state,
				previousItemId: state.currentItemId,
				currentItemId: action.currentItemId
			}
		}
		default:
			return state;
	}
}

const setItemId = (currentItemId) => ({
	type: SET_ITEM_ID,
	currentItemId
});

export {setItemId};
export default aboutReducer;