const { Test } = require('../models')
const { logError } = require('../utils') 

const fetchTests = (socket) => {
	Test.findAll()
		.then(tests => socket.emit('fetchTests', tests))
		.catch(logError)
}

const getTest = (socket,id) => {
	Test.findByPk(id)
		.then(test => socket.emit('getTest', test))
		.catch(logError)
}

const addTest = (socket, data) => {
	Test.create(data)
		.then(() => fetchTests(socket)) // fetch updated tests
		.catch(logError)
}

const updateTest = (socket, data) => {
	Test.update(data, {
		where: { id: data.id }
	})
		.then(() => fetchTests(socket)) // fetch updated tests
		.catch(logError)
}

const deleteTest = (socket, id) => {
	Test.destroy({
		where: { id }
	})
		.then(() => fetchTests(socket)) // fetch updated tests
		.catch(logError)
}

module.exports = {
	fetchTests,
	updateTest,
	deleteTest,
	addTest,
	getTest
}