const squire = require('./square')

describe('squire', () => {

	let mockValue
	//вызывавается перед каждым тестом
	beforeEach(() => {
		// добавить в БД
	})

	//вызывавается один раз перед всеми тестами
	beforeAll(() => {

	})

	// test('Конкрктное значение', () => {
	// 	expect(squire(2)).toBe(4);
	// 	expect(squire(2)).toBeLessThan(5);
	// 	expect(squire(2)).toBeGreaterThan(3);
	// 	expect(squire(2)).not.toBeUndefined();
	// })

	test('Проверка количества вызовов функции. Положительная', () => {
		// expect(squire(2)).toBe(4);
		// expect(squire(2)).toBeLessThan(5);
		// expect(squire(2)).toBeGreaterThan(3);
		// expect(squire(2)).not.toBeUndefined();
		const spyMathPow = jest.spyOn(Math, 'pow')
		expect(squire(2))
		expect(spyMathPow).toBeCalledTimes(1);
	})

	test('Проверка количества вызовов функции. Отрицательная', () => {
		const spyMathPow = jest.spyOn(Math, 'pow')
		expect(squire(1))
		expect(spyMathPow).toBeCalledTimes(0);
	})

	// моки накапливают вызовы, потому перед каждым тестом их нужно очищать
	afterEach(() => {
		jest.clearAllMocks()
	})

	afterAll(() => {

	})

})
