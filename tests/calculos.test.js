const { suma } = require('../controllers/calculos')

test("Deberia sumar 2 numeros positivos", () => {
    const res = suma(1, 4);
})