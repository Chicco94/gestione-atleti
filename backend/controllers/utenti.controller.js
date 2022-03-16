const { Utenti } = require('../models')
const { logError } = require('../utils') 

const fetchUtenti = (socket) => {
	Utenti.findAll()
		.then(utenti => socket.emit('fetchUtenti', utenti))
		.catch(logError)
}

const login = (socket,data) => {
	Utenti.findAll({
		where: { id:data.username,password:data.password }
	}).then( utenti => {
		if (utenti.length > 0){
			console.log(utenti[0].id)
			socket.emit('loginSuccesful', utenti);
		} else{
			console.log(utenti)
			socket.emit('loginUnsuccesful');
		}
	})
	.catch(logError);
}

const getUtenti = (socket,id) => {
	Utenti.findByPk(id)
		.then(utente => socket.emit('getUtenti', utente))
		.catch(logError)
}

const addUtenti = (socket, data) => {
	Utenti.create(data)
		.then(() => fetchUtenti(socket)) // fetch updated utenti
		.catch(logError)
}

const updateUtenti = (socket, data) => {
	Utenti.update(data, {
		where: { id: data.id }
	})
		.then(() => fetchUtenti(socket)) // fetch updated utenti
		.catch(logError)
}

const deleteUtenti = (socket, id) => {
	Utenti.destroy({
		where: { id }
	})
		.then(() => fetchUtenti(socket)) // fetch updated utenti
		.catch(logError)
}

module.exports = {
	fetchUtenti,
	updateUtenti,
	deleteUtenti,
	addUtenti,
	getUtenti,
	login
}