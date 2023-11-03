const express = require('express');
const router = express.Router();
const Game = require('../models/game');
// Create a new game
router.post('/games', async (req, res) => {
 try {
 const game = new Game(req.body);
 await game.save();
 res.status(201).send(game);
 } catch (error) {
 res.status(400).send(error);
 }
});
// Define other game-related routes as needed
module.exports = router;