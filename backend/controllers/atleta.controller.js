const { Atleta } = require('../models')
const { logError } = require('../utils') 

const fetchAtleti = (socket) => {
	Atleta.findAll()
		.then(atleti => socket.emit('fetchAtleti', atleti))
		.catch(logError)
}

const addAtleta = (socket, data) => {
	Atleta.create(data)
		.then(() => fetchAtleti(socket)) // fetch updated atleti
		.catch(logError)
}

const updateAtleta = (socket, data) => {
	Atleta.update(data, {
		where: { id: data.id }
	})
		.then(() => fetchAtleti(socket)) // fetch updated atleti
		.catch(logError)
}

const deleteAtleta = (socket, id) => {
	Atleta.destroy({
		where: { id }
	})
		.then(() => fetchAtleti(socket)) // fetch updated atleti
		.catch(logError)
}

module.exports = {
	fetchAtleti,
	updateAtleta,
	deleteAtleta,
	addAtleta
}