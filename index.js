// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow all origins
app.use(express.raw({ type: '*/*', limit: '200mb' })); // Handle big uploads


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  console.log('Body:', req.body);
  console.log('Query:', req.query);
  console.log('Headers:', req.headers);
  next();
});


// Dummy upload handler
app.post('/empty', (req, res) => {
  req.on('data', () => { }); // Do nothing with the data
  req.on('end', () => res.status(200).send('OK'));
});


app.post('/check-route', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'Hellooooo thereA PP World!',
  });
});

app.post('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'Hellooooo there World! from India',
  });
});


app.listen(3000, () => console.log('Upload server running on http://localhost:3000'));
