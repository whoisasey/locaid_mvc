/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./api/routes/data');

dotenv.config({ path: './api/config.env' });
const app = express();

// app.get('/', (req, res) => {
//         res.send({ hi: 'there' });
// });

mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
        console.log('MongoDB connected');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

app.use('/api/locaid', routes);

// if (process.env.NODE_ENV === 'production') {
//         app.use(express.static('client/build'));
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening on port ${PORT} 🐙`));
