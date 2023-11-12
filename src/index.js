import dotenv from 'dotenv'
import connectDb from './db/db.js'
import { app } from './app.js'

dotenv.config()
connectDb()
  .then(() => {
    app.on('error', (error) => {
      console.log('Server is able to connect with database')
      throw error
    })
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is runing at port: ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log('MongoDB connection failed !!!', error)
  })