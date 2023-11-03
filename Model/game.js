const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
 board: {
 type: [[String]], // A 2D array representing the game board
 required: true,
 },
 currentPlayer: {
 type: String, // 'X' or 'O'
 required: true,
 },
 winner: {
 type: String, // 'X', 'O', or null
 },
 isGameOver: {
 type: Boolean,
 default: false,
 },
});