const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'kickermanager',
})

app.post('/addPlayer', (req, res) => {
    const name = req.body.name
    const location = req.body.location
    db.query(
        'INSERT INTO players (name, location) VALUES (?, ?)',
        [name, location],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('Player added')
            }
        }
    )
})

app.post('/upload', (req, res) => {
    const image = req.body.image
    db.query('INSERT INTO images (image) VALUES ?', [image], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('image inserted')
        }
    })
})

app.get('/players', (req, res) => {
    db.query('SELECT * FROM players', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log('Server is running on Port 3001')
})
