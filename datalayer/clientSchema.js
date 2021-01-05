import mongoose from 'mongoose'

const clientSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    lastname: String,
    birthdate: String,
    age: Number
})

export default mongoose.model('Client', clientSchema)