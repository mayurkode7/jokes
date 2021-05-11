const path = require('path')
const express = require('express')
const app = express()
const dotenv = require('dotenv') // to define config, url etc

dotenv.config({ path: './config/config.env' })

if (process.env.NODE_ENV === 'development') {
    console.log('development mode is running')
} else if (process.env.NODE_ENV === 'production') {
    console.log('production mode is running')
}

const PORT = process.env.port || 5000


// define basic path
app.get('/', (req, res) => {
    res.send('Hello Server')
});


// show about
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'about.html'), (err) => {
        console.log(err)
    })
});

// listen to port
app.listen(PORT, () => {
    console.log(`Server started on port`);
});