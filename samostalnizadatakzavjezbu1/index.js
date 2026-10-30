const express=require('express')
const app = express()
const PORT = 8000;

const users = [
  { id: 1, ime: 'Nikolina', prezime: 'V' },
  { id: 2, ime: 'Rea', prezime: 'L' },
  { id: 3, ime: 'Mila', prezime: 'L' },
];


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Poslužitelj radi na ${PORT} portu`);
});