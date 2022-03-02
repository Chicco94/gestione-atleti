const { TestAllenamento } = require('../models')
const { logError } = require('../utils') 



const getTestAllenamentoByAllenamento = (socket,idallenamento) => {
	let query = {
		where: {idallenamento: idallenamento}
	  }
	TestAllenamento.findAll(query)
		.then(testAllenamenti => socket.emit('getTestAllenamentoByAllenamento', testAllenamenti))
		.catch(logError)
}

module.exports = {
	getTestAllenamentoByAllenamento
}