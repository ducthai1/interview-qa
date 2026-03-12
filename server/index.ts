import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import progressRoutes from './routes/progress.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fe-interview-hub'

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'http://localhost:4173',
    ...(process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : [])
  ],
  credentials: true,
}))
app.use(express.json())

// Routes
app.use('/api/progress', progressRoutes)

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
  })
})

// Connect to MongoDB and start server
async function start() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('✅ MongoDB connected:', MONGODB_URI.replace(/\/\/.*@/, '//<credentials>@'))

    app.listen(PORT, () => {
      console.log(`🚀 API server running at http://localhost:${PORT}`)
      console.log(`   Health check: http://localhost:${PORT}/api/health`)
    })
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err)
    process.exit(1)
  }
}

start()
