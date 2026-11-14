const express = require('express');
const app = express();


app.use(express.json());


app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Akshata' }]);
});

app.post('/users', (req, res) => {
  console.log(req.body);
  res.json({ message: 'User created', data: req.body });
});


app.listen(3000, () => console.log('Server running'));