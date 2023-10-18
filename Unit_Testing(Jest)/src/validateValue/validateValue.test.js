const validateValue = require('./validateValue')

describe('validateValue', () => {
	test('Допустимое значение', () => {
		expect(validateValue(50)).toBe(true);
	})

	test('Меньше допустимого значения', () => {
		expect(validateValue(-1)).toBe(false);
	})

	test('Больше допустимого значения', () => {
		expect(validateValue(101)).toBe(false);
	})

	test('Пограничное значение снизу', () => {
		expect(validateValue(0)).toBe(false);
	})

	test('Пограничное значение сверху', () => {
		expect(validateValue(100)).toBe(false);
	})

})