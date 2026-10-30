const express = require('express');
const app = express();

const PORT = 8000;
// RUTA/endpoint ="/" (root ruta, defaultni endpoint)
// HTTP metoda= GET
//prvi param = HTTP request
// drugi param = HTTP response
app.get('/', (req, res) => {
  console.log("Pozvana je GET metoda na defaultnim endpointom")
  res.send("Poz iz Express.js servera")
});


// ovo je na bazi save
let pizze=[
  {id:1, naziv:"Margerita",cijena:35},
  {id:2, naziv:"FAntasia",cijena:25},
  {id:3, naziv:"CApricisa",cijena:17},

]

// HTTp klijent (web preglednik) šalje zahtjeve HTTP GET zahtjev na posluzitelj
// Express.js poslužitelj na GET /pizze 

app.get("/pizze", (req,res)=>{
  console.log("Pozvana je GET metoda na /pizze endpointu")
  res.json(pizze)
})

app.listen(PORT, error => {
  if (error) {
    console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
  } else {
    console.log(`Justo dela  na ${PORT} portu`);
  }
});