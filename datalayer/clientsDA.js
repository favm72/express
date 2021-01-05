import connect from './connect.js'
import mongoose from 'mongoose'
import Client from './clientSchema.js'

export default class ClientDA {    
    static async list() {        
        const connected = await connect(mongoose)
        if (!connected)
            throw { message: "No se pudo conectar a la base de datos." }
        const clients = await Client.find({})
        mongoose.disconnect()
        return clients
    }
    static async create(model) {
        const connected = await connect(mongoose)
        if (!connected)
            throw { message: "No se pudo conectar a la base de datos." }        

        const client = new Client({
            _id: new mongoose.Types.ObjectId(),
            name: model.name,
            lastname: model.lastname,
            birthdate: model.birthdate,
            age: model.age
        })
        await client.save()
        mongoose.disconnect()
    }
}