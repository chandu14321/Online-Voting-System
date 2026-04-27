require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Mongo error:', err));

const routes = require('./routes');
const handle = require('./handlers');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://online-voting-system-dusky-eight.vercel.app',
    ],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', routes.auth);
app.use('/api/polls', routes.poll);

app.get('/', (req, res) => {
  res.send('Voting API is running');
});

// 404 handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(handle.error);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
