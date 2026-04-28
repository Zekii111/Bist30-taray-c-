const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/data/:symbol', async (req, res) => {
    try {
        const symbol = req.params.symbol;
        const response = await axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Veri alınamadı' });
    }
});

module.exports = app;
