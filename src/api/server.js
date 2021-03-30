const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/sum', (req, res) => {
  console.log(req.body);
  res.send(
     `${req.body.firstValue + req.body.secondValue}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));