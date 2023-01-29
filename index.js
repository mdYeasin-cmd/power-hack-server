const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const uri = `mongodb+srv://${process.env.POWER_HACK_DB_USER}:${process.env.POWER_HACK_DB_PASSWORD}@cluster0.0nieed1.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    const billingsCollection = client.db('powerHackDB').collection('billings');

    try {

        app.post('/add-billing', async (req, res) => {
            const billing = req.body;
            const result = await billingsCollection.insertOne(billing);
            res.send(result);
        })


    }
    finally {

    }
}

run().catch(error => console.log(error));

app.get('/', (req, res) => {
    res.send('Power Hack server is runing.');
});

app.listen(port, () => {
    console.log(`Power Hack server is runing on port ${port}`);
})