let input = document.getElementById('input');
let result = document.getElementById('result');
var arr = [];

let getWeekDay = (date) => {
	let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	return days[date.getDay()];
}

let getMonthRU = (date) => {
	let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
	return months[date.getMonth()];
};

let getWeek = (day, date) => {
	let res;

	if(date.getDay() == 0) {
		res = 0;
	} else {
		res = 1
	};

	if(day%7 > date.getDay()) res++;

	return res + Math.trunc(day/7);
};

let validDate = (arr) => {
	let valid = new Date(arr[2] + '.' + arr[1] + '.' + arr[0]);
	return valid;
};

let getDayInfo = () => {
	arr = input.value.split('.');
	let date = validDate(arr);
	document.getElementById('result').innerText = getWeekDay(date) + ', ' + getWeek(date.getDate(), date) + ' неделя ' + getMonthRU(date) + ' ' + date.getFullYear() + ' года';
};