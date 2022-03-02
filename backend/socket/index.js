const { fetchAtleti, addAtleta, updateAtleta, deleteAtleta, getAtleta } = require('../controllers/atleta.controller');
const { fetchTests, addTest, updateTest, deleteTest, getTest } = require('../controllers/test.controller');
const { fetchAllenamenti, addAllenamento, updateAllenamento, deleteAllenamento, getAllenamento } = require('../controllers/allenamento.controller');

module.exports = (io) => {

	io.on('connection', socket => {

		console.log(`Socket ${socket.id} has connected`) 
		
		socket.on('disconnect', () => console.log(`Socket ${socket.id} has disconnected`)); 

		socket.on('fetchAtleti', () => fetchAtleti(socket));
		socket.on('addAtleta', (data) => addAtleta(socket, data));
		socket.on('updateAtleta', (data) => updateAtleta(socket, data));
		socket.on('deleteAtleta', (id) => deleteAtleta(socket, id));
		socket.on('getAtleta', (id) => getAtleta(socket, id));
		
		socket.on('fetchTests', () => fetchTests(socket));
		socket.on('addTest', (data) => addTest(socket, data));
		socket.on('updateTest', (data) => updateTest(socket, data));
		socket.on('deleteTest', (id) => deleteTest(socket, id));
		socket.on('getTest', (id) => getTest(socket, id));

		socket.on('fetchAllenamenti', () => fetchAllenamenti(socket));
		socket.on('addAllenamento', (data) => addAllenamento(socket, data));
		socket.on('updateAllenamento', (data) => updateAllenamento(socket, data));
		socket.on('deleteAllenamento', (id) => deleteAllenamento(socket, id));
		socket.on('getAllenamento', (id) => getAllenamento(socket, id));
		
		
	})
}