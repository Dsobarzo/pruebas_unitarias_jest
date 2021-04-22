const { resta, suma } = require('../controllers/calculos')

describe("Prueas sobre Resta", () => {
    test("debria restar 2 numeros", () => {
        const actual = resta(3, 2)
        expect(actual).toBe(1)
    })
})

describe("Prueas sobre Suma", () => {
    test("debria sumar 2 numeros", () => {
        const actual = suma(3, 2)
        expect(actual).toBe(5)
    })
})