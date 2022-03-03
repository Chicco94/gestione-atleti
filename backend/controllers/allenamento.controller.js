const { Allenamento, AtletaAllenamento, TestAllenamento, Risultato, Atleta } = require('../models')
const { logError } = require('../utils') 

const fetchAllenamenti = (socket) => {
	Allenamento.findAll()
		.then(allenamenti => socket.emit('fetchAllenamenti', allenamenti))
		.catch(logError)
}

const getAllenamento = (socket,idallenamento) => {
	let query = {
		where: {idallenamento: idallenamento}
	}

	// Prendo tutti i test previsti
	let response_line = {};
	TestAllenamento.findAll(query).then(testAllenamenti => {
		testAllenamenti.forEach(test => {
			response_line['result_'+test.sequenza] = 0;
		})
	}).catch(logError)

	// Prendo tutti gli atleti selezionati
	AtletaAllenamento.findAll(query).then( atletiAllenamenti => {
		// creo una matrice con prima colonna gli atleti, 
		// ogni altra colonna i risultati dei test nella sequenza prevista
		return atletiAllenamenti.map(atletaAllenamento => {
			temp = JSON.parse(JSON.stringify(response_line));
			temp.idatleta = atletaAllenamento.idatleta;
			return temp;
		})
	}).then( risultati_temp => {
		return risultati_temp.map(risultato_temp => {
			return Risultato.findAll({where:{idallenamento:idallenamento,idatleta:risultato_temp.idatleta}}).then(risultati_atleta => {
				for (let i=0; i< risultati_atleta.length; i++){
					risultato_atleta = risultati_atleta[i];
					risultato_temp['result_'+risultato_atleta.sequenza] = risultato_atleta.risultato;
				}
				console.log(risultato_temp);
				return JSON.parse(JSON.stringify(risultato_temp));
			})
		})
	}).then(risultati => {
		console.log("test",risultati); 
		Allenamento.findByPk(idallenamento).then(allenamento => {
			socket.emit('getAllenamento', {allenamento: allenamento, risultati: risultati})
		}).catch(logError);
	}).catch(logError);
}

const buildAllenamento = (socket, idallenamento) => {
	let query = {
		where: {idallenamento: idallenamento}
	}

	// Prendo tutti i test previsti
	TestAllenamento.findAll(query).then(testAllenamenti => {
		// Prendo tutti gli atleti selezionati
		AtletaAllenamento.findAll(query).then( atletiAllenamenti => {
			// Per ogni test
			testAllenamenti.forEach(testAllenamento => {
				// Per ogni atleta
				atletiAllenamenti.forEach(atletaAllenamento => {
					// Creo un risultato 
					let new_risultato = {
						idallenamento: idallenamento,
						idtest: testAllenamento.idtest,
						idatleta: atletaAllenamento.idatleta,
						sequenza: testAllenamento.sequenza
					};
					Risultato.create(new_risultato).catch(logError)
				});
			});
		}).catch(logError)
	}).catch(logError)
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
	getAllenamento,
	buildAllenamento
}