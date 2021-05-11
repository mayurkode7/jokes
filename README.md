# jokes

App that shows jokes and let you add new ones. Built using MERN stack.

# server file

# Init express App and define port

const path = require('path')
const express = require('express')

const app = express()

const PORT = process.env.port || 5000

# Listen to basic path

// define basic path
app.get('/', (req, res) => {
res.send('Hello Server')
});

# Configure PORT for server to listen

# Configure configuration file

## install dotenv npm i dotenv

create folder config
create file config.env

config.env >>

NODE_ENV=development
PORT=5000
