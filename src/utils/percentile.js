// Autor Mateo Medranda

class Calculadora {
    percentile(p, values) {
        if (p < 0 || p > 100) {
            throw new RangeError('p debe estar entre 0 y 100');
        }

        if (!Array.isArray(values)) {
            throw new TypeError('values debe ser un array');
        }

        values.sort((a, b) => a - b);
        const N = values.length;
        const rank = Math.ceil((p / 100) * N);

        if (p === 0) {
            return values[0];
        } else if (p === 100) {
            return values[N - 1];
        }

        return values[rank - 1];
    }
}

module.exports = Calculadora;