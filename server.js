const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data.json');

app.use(express.json());
app.use(cors());

app.get("/appsitenspodcast", function(req, res) {
  res.json(data);
});

app.get("/appsitenspodcast/:id", function(req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);
    if (!client) return res.status(204).json();
    res.json(client);
});
app.get("/appsitenspodcast/:filmesseries", function(req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);
  
    if (!client) return res.status(204).json();
  
    res.json(client);
});


app.listen(process.env.PORT || 3000, function(){
    console.log("servidor rodando");
})