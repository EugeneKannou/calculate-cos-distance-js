Number.isInteger = Number.isInteger || function (value) {
    return typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value;
};

const calculate = function (vector1, vector2, precision=5) {
    if (!Array.isArray(vector1) || !Array.isArray(vector2)) {
        throw new TypeError('Both vectors must be arrays!');
    }

    if (vector1.length !== vector2.length) {
        throw ("Arrays must have equal length!");
    }

    return (dotProduct(vector1, vector2) / vectorLen(vector1) / vectorLen(vector1)).toPrecision(precision);
}

const dotProduct = function (vector1, vector2) {
    if (!Array.isArray(vector1) || !Array.isArray(vector2)) {
        throw new TypeError('Both vectors must be arrays!');
    }

    if (vector1.length !== vector2.length) {
        throw ("Arrays must have equal length!");
    }

    let d = 0.0;
    for (let i = 0; i < vector1.length; i++) {
        d += vector1[i] * vector2[i];
    }

    return d;
}

const vectorLen = function (vector) {
    if (!Array.isArray(vector)) {
        throw new TypeError('Vector must be array!');
    }

    let len = 0.0;
    for (let i = 0; i < vector.length; i++) {
        len += vector[i] ** 2;
    }

    return Math.sqrt(len);
}

module.exports = {
    calculate,
    vectorLen,
    dotProduct
};