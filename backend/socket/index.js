const { login, fetchUtenti, addUtente, updateUtente, deleteUtente, getUtente } = require('../controllers/utenti.controller');
const { fetchAtleti, addAtleta, updateAtleta, deleteAtleta, getAtleta } = require('../controllers/atleta.controller');
const { fetchTests, addTest, updateTest, deleteTest, getTest } = require('../controllers/test.controller');
const { fetchAllenamenti, addAllenamento,buildAllenamento, updateAllenamento, deleteAllenamento, getAllenamento } = require('../controllers/allenamento.controller');
const { fetchGare } = require('../controllers/gara.controller');
const { fetchRisultati, addRisultato, updateRisultato, deleteRisultato, getRisultato, getRisultatoByAllenamento } = require('../controllers/risultato.controller');
const { getAtletaAllenamentoByAllenamento,setAtletaToAllenamento } = require('../controllers/atletaAllenamento.controller');
const { getTestAllenamentoByAllenamento,setTestToAllenamento } = require('../controllers/testAllenamento.controller');


module.exports = (io) => {

	io.on('connection', socket => {

		console.log(`Socket ${socket.id} has connected`) 
		
		socket.on('disconnect', () => console.log(`Socket ${socket.id} has disconnected`)); 

		// LOGIN
		socket.on('login',(data) => login(socket,data));

		//	UTENTI
		socket.on('fetchUtenti', () => fetchUtenti(socket));
		socket.on('addUtente', (data) => addUtente(socket, data));
		socket.on('updateUtente', (data) => updateUtente(socket, data));
		socket.on('deleteUtente', (id) => deleteUtente(socket, id));
		socket.on('getUtente', (id) => getUtente(socket, id));

		//	ATLETI
		socket.on('fetchAtleti', () => fetchAtleti(socket));
		socket.on('addAtleta', (data) => addAtleta(socket, data));
		socket.on('updateAtleta', (data) => updateAtleta(socket, data));
		socket.on('deleteAtleta', (id) => deleteAtleta(socket, id));
		socket.on('getAtleta', (id) => getAtleta(socket, id));
		
		// TEST
		socket.on('fetchTests', () => fetchTests(socket));
		socket.on('addTest', (data) => addTest(socket, data));
		socket.on('updateTest', (data) => updateTest(socket, data));
		socket.on('deleteTest', (id) => deleteTest(socket, id));
		socket.on('getTest', (id) => getTest(socket, id));

		// ALLENAMENTO
		socket.on('fetchAllenamenti', () => fetchAllenamenti(socket));
		socket.on('addAllenamento', (data) => addAllenamento(socket, data));
		socket.on('buildAllenamento', (id) => buildAllenamento(socket, id));
		socket.on('updateAllenamento', (data) => updateAllenamento(socket, data));
		socket.on('deleteAllenamento', (id) => deleteAllenamento(socket, id));
		socket.on('getAllenamento', (id) => getAllenamento(socket, id));
		socket.on('getAtletaAllenamentoByAllenamento', (id) => getAtletaAllenamentoByAllenamento(socket, id));
		socket.on('setAtletaToAllenamento', (data) => setAtletaToAllenamento(socket, data));
		socket.on('getTestAllenamentoByAllenamento', (id) => getTestAllenamentoByAllenamento(socket, id));
		socket.on('setTestToAllenamento', (data) => setTestToAllenamento(socket, data));
		
		// GARE
		socket.on('fetchGare', () => fetchGare(socket));

		// RISULTATI
		socket.on('fetchRisultati', () => fetchRisultati(socket));
		socket.on('addRisultato', (data) => addRisultato(socket, data));
		socket.on('updateRisultato', (data) => updateRisultato(socket, data));
		socket.on('deleteRisultato', (id) => deleteRisultato(socket, id));
		socket.on('getRisultato', (id) => getRisultato(socket, id));
		socket.on('getRisultatoByAllenamento', (idallenamento) => getRisultatoByAllenamento(socket, idallenamento));



		
		
	})
}