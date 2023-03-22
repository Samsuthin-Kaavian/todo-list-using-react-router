const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
let db;

const connectToMongo =() =>{
    return new Promise((resolve, reject) => {
        client.connect()
            .then(() =>{
                db = client.db('kaavianDB');
                // console.log('connected');
                resolve()
            })
            .catch((err) =>{
                console.log('Error happended while trying to connect MongoDB ');
                reject(err);
            })
    })
}

const getCollection= (collection) =>{
    return db.collection(collection);
}
module.exports ={connectToMongo, getCollection};