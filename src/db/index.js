import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'
const connectDB = async () => {
  try {
    const conInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`,
    )
    console.log(`MongoDB Connected: ${conInstance.connection.host}`)
  } catch (err) {
    console.error(`Error: ${err.message}`)
    process.exit(1)
  }
}

export default connectDB
