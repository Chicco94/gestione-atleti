const { Risultato,Atleta,Test,Allenamento } = require('../models')
const { logError } = require('../utils') 

const fetchRisultati = (socket) => {
	Risultato.findAll()
		.then(risultati => socket.emit('fetchRisultati', risultati))
		.catch(logError)
}

const getRisultato = (socket,id) => {
	Risultato.findOne({
		where: {id: id}
	})
	.then(risultato => socket.emit('getRisultato', risultato))
	.catch(logError)
}

const getRisultatoByAllenamento = (socket,_idallenamento) => {
	let query = {
		include: [{
			model: Allenamento,
			where: { id: _idallenamento },
			as: 'allenamento'
		},
		{
			model: Atleta,
			as: 'atleta'
		},
		{
			model: Test,
			as: 'test'
		}]
	}
	Risultato.findAll(query)
		.then(risultati => socket.emit('getRisultatoByAllenamento', risultati))
		.catch(logError)
}

const addRisultato = (socket, data) => {
	Risultato.create(data)
		.then((result) => socket.emit('getRisultato', result)) // fetch updated tests
		.catch(logError)
}

const updateRisultato = (socket, data) => {
	Risultato.update(data, {
		where: { id: data.id }
	})
		.then(() => fetchRisultati(socket)) // fetch updated tests
		.catch(logError)
}

const deleteRisultato = (socket, id) => {
	Risultato.destroy({
		where: { id }
	})
		.then(() => fetchRisultati(socket)) // fetch updated tests
		.catch(logError)
}

module.exports = {
	fetchRisultati,
	updateRisultato,
	deleteRisultato,
	addRisultato,
	getRisultato,
	getRisultatoByAllenamento
}