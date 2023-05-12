import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const Connection = () => {
    const MONGODB_URI = `mongodb+srv://smailez:Ap7YqvVR2hpcYWi@mern-test.ngmktsf.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URI, {useNewUrlParser: true})

    mongoose.connection.on('connected', () => {
        console.log('DATABase Mongo connect')
    })

    mongoose.connection.on('disconnected', () => {
        console.log('DATABase Mongo disconnect')
    })

    mongoose.connection.on('error', () => {
        console.log('Error Mongo connect', error.message)
    })
}

export default Connection
