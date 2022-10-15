
const { MongoClient, ServerApiVersion } = require('mongodb');


const mongoose = require('mongoose');
const uri = "mongodb+srv://dpproject:dpproject123@dpproject.zv7zvv3.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
module.exports.connect = () => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
    .then(() => {
        console.log("Database connected");
    })
    .catch(err => {
        console.log("Database connection error: " + err.message);
    });
}