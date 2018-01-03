const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  // Dummy data for demo
  const customers = [
    {id: 001, firstName: 'Mickey', lastName: 'Mouse'},
    
    {id: 002, firstName: 'Donald', lastName: 'Duck'},
    
    {id: 003, firstName: 'Goofy', lastName: 'Goof'}
  ];
  
  res.json(customers);
});

const port = 5000;

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});

