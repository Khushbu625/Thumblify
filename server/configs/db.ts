import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () =>
      console.log('MongoDB connected')
    )

    await mongoose.connect(process.env.MONGODB_URI as string, {
      family: 4, // 👈 FORCE IPv4 (THIS FIXES SRV ISSUE)
    })
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    process.exit(1)
  }
}

export default connectDB
