export default async (mongoose) => {
    try {
        const dburi = `mongodb+srv://admin:123@cluster0.pfhqe.mongodb.net/testdb?retryWrites=true&w=majority`
        await mongoose.connect(dburi,  { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        return true
    } catch (error) {
        console.log("Error de conexión")
        console.log(error)
        return false
    }
}
