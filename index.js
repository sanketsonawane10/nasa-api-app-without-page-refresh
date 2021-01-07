

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');
const path = require('path');

app.use(express.static(path.join(__dirname,'/public')));

app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');

// Routes
require('./routes/web')(app);


app.listen(PORT,()=>{
    console.log(`app is listening on port : ${PORT}`);
})
