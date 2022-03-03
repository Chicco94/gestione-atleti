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


const setAtletaToAllenamento = (socket, data) => {
	// elimino i test attuali
	AtletaAllenamento.destroy({
		where: {idallenamento: data.idallenamento}
	})
	data.lista_atleti.forEach(element => {
		// trasformo test in testAllenamento
		temp = {
			idallenamento: data.idallenamento
			,idatleta: element
		}
		AtletaAllenamento.create(temp)
			.catch(logError)
	});
}
module.exports = {
	getAtletaAllenamentoByAllenamento,
	setAtletaToAllenamento
}