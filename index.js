const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection


app.get('/', (req, res) => {
    res.send('Power Hack server is runing.');
});

app.listen(port, () => {
    console.log(`Power Hack server is runing on port ${port}`);
})