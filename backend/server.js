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

app.post('/addMatch', (req, res) => {
    const date = req.body.date
    const location = req.body.location
    const mode = req.body.mode
    const matchPlayersOneFront = req.body.teamOneFront
    const matchPlayersOneBack = req.body.teamOneBack
    const matchPlayersTwoFront = req.body.teamTwoFront
    const matchPlayersTwoBack = req.body.teamTwoBack
    const matchGoalsRoundOneTeamOne = req.body.goalsRoundOneTOne
    const matchGoalsRoundOneTeamTwo = req.body.goalsRoundOneTTwo
    const matchGoalsRoundTwoTeamOne = req.body.goalsRoundTwoTOne
    const matchGoalsRoundTwoTeamTwo = req.body.goalsRoundTwoTTwo
    db.query(
        'INSERT INTO matches (date, location, mode, matchPlayersOneFront, matchPlayersOneBack, matchPlayersTwoFront, matchPlayersTwoBack, matchGoalsRoundOneTeamOne, matchGoalsRoundOneTeamTwo, matchGoalsRoundTwoTeamOne, matchGoalsRoundTwoTeamTwo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
            date,
            location,
            mode,
            matchPlayersOneFront,
            matchPlayersOneBack,
            matchPlayersTwoFront,
            matchPlayersTwoBack,
            matchGoalsRoundOneTeamOne,
            matchGoalsRoundOneTeamTwo,
            matchGoalsRoundTwoTeamOne,
            matchGoalsRoundTwoTeamTwo,
        ],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('match added')
            }
        }
    )
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
