const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
const gameRoutes = require('./routes/game');
app.use('/api', gameRoutes);
// Body parsing middleware
app.use(express.json());
// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/your-database-name', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});
// Create a basic route
app.get('/', (req, res) => {
 res.send('Welcome to your Tic-Tac-Toe API!');
});
// Start the server
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});