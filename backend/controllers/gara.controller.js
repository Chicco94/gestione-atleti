const { Allenamento } = require('../models')
const { logError } = require('../utils') 

const fetchGare = (socket) => {
	Allenamento.findAll({where: {is_gara: true}})
		.then(allenamenti => socket.emit('fetchAllenamenti', allenamenti))
		.catch(logError)
}

module.exports = {
	fetchGare,
}