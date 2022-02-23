const { fetchAtleti, addAtleta, updateAtleta, deleteAtleta } = require('../controllers/atleta.controller');

module.exports = (io) => {

	io.on('connection', socket => {

		console.log(`Socket ${socket.id} has connected`) 
		
		socket.on('disconnect', () => console.log(`Socket ${socket.id} has disconnected`)); 

		socket.on('fetchAtleti', () => fetchAtleti(socket));
		
		socket.on('addAtleta', (data) => addAtleta(socket, data));

		socket.on('updateAtleta', (data) => updateAtleta(socket, data));

		socket.on('deleteAtleta', (id) => deleteAtleta(socket, id));
		
		socket.on('disconnect', () => console.log('disconnected')); 
		
	})
}