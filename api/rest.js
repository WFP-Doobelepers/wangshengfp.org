const fs = require('fs')
const express = require('express')

const app = express()
app.use(express.json())

app.get('/guides', (_req, res) => {
    const guides = fs.readdirSync('./content/guides').map(x => x.replace('.md', ''))

    res.json({
        guides
    })
})

module.exports = app
