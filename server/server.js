const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/messenger'));
app.listen(3000, () => {
    console.log('Express server started on port 4200');
  });