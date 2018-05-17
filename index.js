const express = require('express');
const app= express();
const morgan = require('morgan')
const PORT = process.env.PORT || 3010;
const accountRoutes = require('./routes/accounts');
const transactionRoutes = require('./routes/transactions');


app.use(morgan('dev'));
app.use(express.json());

app.use('/', accountRoutes);
app.use('/', transactionRoutes);

app.get('/', (request, response)=>{
  response.send('Welcome to The Bank Application.');
});

app.listen(PORT, ()=>{
  console.log(`Express application listening on port${PORT}...`);
});
