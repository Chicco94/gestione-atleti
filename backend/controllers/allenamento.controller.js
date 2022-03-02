const { Allenamento } = require('../models')
const { logError } = require('../utils') 

const fetchAllenamenti = (socket) => {
	Allenamento.findAll()
		.then(allenamenti => socket.emit('fetchAllenamenti', allenamenti))
		.catch(logError)
}

const getAllenamento = (socket,id) => {
	Allenamento.findByPk(id)
		.then(allenamento => socket.emit('getAllenamento', allenamento))
		.catch(logError)
}

const addAllenamento = (socket, data) => {
	Allenamento.create(data)
		.then((result) => socket.emit('getAllenamento', result)) // fetch updated tests
		.catch(logError)
}

const updateAllenamento = (socket, data) => {
	Allenamento.update(data, {
		where: { id: data.id }
	})
		.then(() => fetchAllenamenti(socket)) // fetch updated tests
		.catch(logError)
}

const deleteAllenamento = (socket, id) => {
	Allenamento.destroy({
		where: { id }
	})
		.then(() => fetchAllenamenti(socket)) // fetch updated tests
		.catch(logError)
}

module.exports = {
	fetchAllenamenti,
	updateAllenamento,
	deleteAllenamento,
	addAllenamento,
	getAllenamento
}