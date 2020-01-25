const express = require('express');


const characterRouter = require('../auth/character-router.js');


const server = express();

server.use(express.json());

server.use('/api/characters', characterRouter);

server.get('/', (req, res) => {
    res.send("💚 || If you can read this, it's working! ;) || 💚")
})

module.exports = server;