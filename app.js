const express = require('express')
const app = express()
const port = 3000
const funcao = require('./services/playlists-service.js')

app.get('/playlists', async (req, res) => {
    response = await funcao.getPlaylist()
    res.send(response.data)
})

app.listen(port, () => {
    console.log(`Ouvindo ${port}`)
})

