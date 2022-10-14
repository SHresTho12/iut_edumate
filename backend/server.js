//initialize express server 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = process.env.PORT || 80;

//connect with database
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });


//middleware

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
app.use(express.json());


//header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
    });


    //api
    // app.use('/api/posts', require('./routes/api/posts'));
    // app.use('/api/users', require('./routes/api/users'));
    // app.use('/api/auth', require('./routes/api/auth'));
    // app.use('/api/profile', require('./routes/api/profile'));



    //static resources
    app.use(express.static('public'));
    app.use('/upload',express.static(path.join(__dirname, '/../uploads')));
    app.use(express.static(path.join(__dirname, '/../frontend/build')));
    app.get('*', (req, res) => {
        try{
            res.sendFile(path.join(__dirname, '/../frontend/build/index.html'));
        }
        catch(err){
            console.log(err);
            res.send("Error");
        }
        
    });
    
    //cors  
    app.use(cors());

    //server listening
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
    }
    );