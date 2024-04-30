const express = require('express');
const usersroute = require('./routes/usersroutes');

const app = express();

app.use(express.json());
app.use('/users', usersroute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});