const dotenv = require('dotenv').config()
const colors = require('colors')
const express = require('express')
const path = require('path')
const cors = require('cors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorHandler')
connectDB()

const app = express()
app.use(cors())
app.options('*', cors())

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

const PORT = process.env.PORT || 5000
app.use(errorHandler)

app.use('/api', require('./routes/userRoutes'))

const __dirname1 = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname1, '/client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname1, 'client', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('api is running...')
  })
}

app.listen(PORT, () =>
  console.log(
    `Server Running on Port: http://localhost:${PORT} at ${new Date().toLocaleString(
      'en-US'
    )}`.bgCyan.bold.underline
  )
)
