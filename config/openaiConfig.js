const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
})

const openai = new OpenAIApi(configuration)

module.exports = openai