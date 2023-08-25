const dotenv = require('dotenv').config()
const colors = require('colors')
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorHandler')
connectDB()

const app = express()
app.use(cors())
app.options('*', cors())

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

const PORT = 8000
app.use(errorHandler)

app.use('/api', require('./routes/userRoutes'))

app.get('/', (req, res) => {
  res.send('api is running...')
})

app.listen(PORT, () =>
  console.log(
    `Server Running on Port: http://localhost:${PORT} at ${new Date().toLocaleString(
      'en-US'
    )}`.bgCyan.bold.underline
  )
)
