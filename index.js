// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow all origins
app.use(express.raw({ type: '*/*', limit: '200mb' })); // Handle big uploads

// Dummy upload handler
app.post('/empty', (req, res) => {
  req.on('data', () => { }); // Do nothing with the data
  req.on('end', () => res.status(200).send('OK'));
});

app.post('/check-route', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'Hellooooo there',
  });
});


app.listen(3000, () => console.log('Upload server running on http://localhost:3000'));
