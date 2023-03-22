const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {connectToMongo,getCollection} = require('./DB_CONNECTION');
const {ObjectId} = require('mongodb');

const app = express();

app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());

app.get('/api/todo', (req,res) =>{
   const collection =getCollection('todo');
   collection.find({}).project({text:1}).toArray().then((todoItems) =>{
			// console.log(todoItems,'server');
			res.json({todoItems})
	 }); 
});

app.post('/api/todo/:id', (req,res) =>{
	const {id} = req.params;
	console.log(id,'check');
	const collection =getCollection('todo');
	collection.findOne({_id :ObjectId(id)}).then((todoItem) =>{
		 console.log(todoItem,'server');
		 res.json({todoItem})
	}); 
});

connectToMongo()
    .then(()=>{
        console.log('Database connected');
        app.listen(3001,()=>{
            console.log('Server Running');
        });
    })
    .catch((err) =>{
        console.log('Unable to bring up Application...', err)
    });
