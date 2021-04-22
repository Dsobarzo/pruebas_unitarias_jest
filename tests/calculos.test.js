const { suma } = require('../controllers/calculos')

test("Deberia sumar 2 numeros positivos", () => {
    const actual = suma(1, 3);
    expect(actual).toBe(4)
    expect(actual).toEqual("4")
})