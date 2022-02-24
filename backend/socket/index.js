const { fetchAtleti, addAtleta, updateAtleta, deleteAtleta } = require('../controllers/atleta.controller');
const { fetchTests, addTest, updateTest, deleteTest } = require('../controllers/test.controller');

module.exports = (io) => {

	io.on('connection', socket => {

		console.log(`Socket ${socket.id} has connected`) 
		
		socket.on('disconnect', () => console.log(`Socket ${socket.id} has disconnected`)); 

		socket.on('fetchAtleti', () => fetchAtleti(socket));
		socket.on('addAtleta', (data) => addAtleta(socket, data));
		socket.on('updateAtleta', (data) => updateAtleta(socket, data));
		socket.on('deleteAtleta', (id) => deleteAtleta(socket, id));

		socket.on('fetchTests', () => fetchTests(socket));
		socket.on('addTest', (data) => addTest(socket, data));
		socket.on('updateTest', (data) => updateTest(socket, data));
		socket.on('deleteTest', (id) => deleteTest(socket, id));
		
		
	})
}