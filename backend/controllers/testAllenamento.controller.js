const { TestAllenamento } = require('../models')
const { logError } = require('../utils') 



const getTestAllenamentoByAllenamento = (socket,idallenamento) => {
	let query = {
		where: {idallenamento: idallenamento}
	  }
	TestAllenamento.findAll(query)
		.then(testAllenamenti => {
			console.log(testAllenamenti);
			socket.emit('getTestAllenamentoByAllenamento', testAllenamenti)
		})
		.catch(logError)
}

const setTestToAllenamento = (socket, data) => {
	// elimino i test attuali
	console.log(data);

	TestAllenamento.destroy({
		where: {idallenamento: data.idallenamento}
	})
	let sequenza = 1;
	data.lista_test.forEach(element => {
		// trasformo test in testAllenamento
		element.idallenamento = data.idallenamento;
		element.idtest = element.id;
		element.sequenza = sequenza;
		element.id = null;
		sequenza += 1;
		TestAllenamento.create(element)
			.catch(logError)
	});
	
}

module.exports = {
	getTestAllenamentoByAllenamento,
	setTestToAllenamento
}