const express = require('express')
const app = express();
const port = 3000
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path'); // NodeJS Package for file paths



mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=>{
     
    if(err){
        console.log('Could not connect to database',err)
    }else{
        console.log('Connected to database ' + config.db);
    }
});

// Provide static directory for frontend
app.use(express.static(__dirname + '/client/dist/client'));

// Connect server to Angular  Index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))