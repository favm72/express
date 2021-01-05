import ClientDA from '../datalayer/clientsDA.js'

export default class ClientBL {
	static async list() {
		try {
			const clients = await ClientDA.list()
			return {
				status: true,
				data: clients
			}
		} catch (error) {
			return {
				status: false,
				message: error.message
			}
		}
	}

	static async create(model) {
		try {
			await ClientDA.create(model)
			return { 
				status: true,
				message: "Cliente registrado correctamente"		
			}
		} catch (error) {
			return { 
				status: false,
				message: error.message		
			}
		}	
	}

	static calcMean(clients) {
		let total = 0
		for (const c of clients) {
			total += c.age
		}
		return total / clients.length
	}

	static calcStd(clients, mean) {
		let sqrsum = 0;
		for (const c of clients) {
			sqrsum += Math.pow((parseFloat(c.age) - mean), 2)
		}
		return Math.sqrt(sqrsum / clients.length);
	}

	static async kpis() {
		try {
			const clients = await ClientDA.list()
			let mean = this.calcMean(clients)	
			let std = this.calcStd(clients, mean)
			return { 
				status: true,
				data: { mean, std }
			}
		} catch (error) {
			return { 
				status: false,
				message: error.message
			}
		}		
	}
}