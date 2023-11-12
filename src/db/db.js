import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'
import dotenv from 'dotenv'

dotenv.config()
const connectDb = async () => {
  try {
    const mongooseInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log('MongoDB connected !! DB host', mongooseInstance.connection.host)
  } catch (error) {
    console.log('MongoDB connection failed', error)
    process.exit(1)
  }
}
export default connectDb

/*
// This code is used when you write the code in index file
dotenv.config()
const app = express()
;(async () => {
  try {
    const mongooseInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log('MongoDB connected !! DB host', mongooseInstance.connection.host)
    app.on('error', (error) => {
      console.log('App is able to connect with database')
      throw error
    })
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log('ERROR: ', error)
    throw error
  }
})()
*/