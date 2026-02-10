// Autor: Mateo Medranda

class NotasPonderadas {
    calcWeightedGrade(items) {
        let total = 0;
        let sumaPesos = 0;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (typeof item['score'] !== 'number') {
                throw new TypeError('Score debe ser un número');
            }
            if (typeof item['weight'] !== 'number') {
                throw new TypeError('Weight debe ser un número');
            }
            if (item['score'] < 0 || item['score'] > 100) {
                throw new RangeError('Rango de score excedido del elemento:\n' + item);
            } else if (item['weight'] < 0 || item['weight'] > 1) {
                throw new RangeError('Rango de weight excedido del elemento:\n' + item);
            }

            sumaPesos += item['weight'];
            total += (item['score'] * item['weight']);
        }

        let tol = 0.001;
        const limSup = 1 + tol;
        const limInf = 0 - tol;

        if (sumaPesos > limSup || sumaPesos < limInf) {
            throw new RangeError('Suma total de pesos excedida.');
        }

        total = total.toFixed(2);
        return total;
    }
}

module.exports = NotasPonderadas;
