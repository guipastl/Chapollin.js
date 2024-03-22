const frasesFinais = require('./dados/frasesFinais.js')

module.exports = function(array = frasesFinais) {
    const indice = Math.floor(Math.random() * array.length)
    return array[indice]
}