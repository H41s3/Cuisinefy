const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/apikey', (req, res) => {
    res.json({ apiKey: process.env.EDAMAM_API_KEY });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
