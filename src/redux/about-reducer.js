const aboutItems = [
	{
		id: 1,
		title: 'Архитектура',
		text: 'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни',
		image: '../images/architecture.jpg',
		link: '/mock-address/change-me'
	},
	{
		id: 2,
		title: 'Благоустройство',
		text: 'Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом',
		image: '../images/landscaping.jpg',
		link: '/mock-address/change-me'
	},
	{
		id: 3,
		title: 'Безопасность',
		text: 'Современный двор европейского уровня — территория для детей, игр на свежем воздухе и вечерних',
		image: '../images/security.jpg',
		link: '/mock-address/change-me'
	},
	{
		id: 4,
		title: 'Инженерия',
		text: 'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни',
		image: '../images/engineering.jpg',
		link: '/mock-address/change-me'
	},
	{
		id: 5,
		title: 'Инфраструктура',
		text: 'Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса',
		image: '../images/infrastructure.jpg',
		link: '/mock-address/change-me'
	},
	{
		id: 6,
		title: 'Транспортная доступность',
		text: 'Жилой комплекс «Первомайска» расположен в престижном Академическом районе',
		image: '../images/transport.jpg',
		link: '/mock-address/change-me'
	}
];

const initialState = {
	currentItemId: 1,
	items: aboutItems
}