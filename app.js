const express = require('express')
const { generateMeta, generateImage } = require('./controllers/openaiController')

// app setup
const app = express()
app.listen(4000, () => console.log('listening to requests on port 4000'))

// middleware
app.use(express.json())

// routes
app.post('/openai/meta', generateMeta)
app.post('/openai/image', generateImage)