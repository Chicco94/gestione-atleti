const { AtletaAllenamento } = require('../models')
const { logError } = require('../utils') 


const getAtletaAllenamentoByAllenamento = (socket,idallenamento) => {
	let query = {
		where: {idallenamento: idallenamento}
	  }
	  AtletaAllenamento.findAll(query)
		.then(atletiAllenamenti => socket.emit('getAtletaAllenamentoByAllenamento', atletiAllenamenti))
		.catch(logError)
}


module.exports = {
	getAtletaAllenamentoByAllenamento
}