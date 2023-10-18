const mapArrToStrings = require('./mapArrToStrings')

describe('mapArrToStrings', () => {
	test('Допустимое значение', () => {
		//toEqual сравнение содержимого
		expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
	})

	test('Разные значения', () => {
		expect(mapArrToStrings([1, 2, 3, null, undefined, 'sdfgh'])).toEqual(['1', '2', '3']);
	})

	test('Пустой массив', () => {
		expect(mapArrToStrings([])).toEqual([]);
	})

	test('Отрицание', () => {
		expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
	})

})