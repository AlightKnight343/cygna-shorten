const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.redirect('https://youtube.com')
})

const port = process.env.PORT || 8000
app.listen(port, ()=>console.log('okay'))