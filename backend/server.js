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
    const winner = req.body.winner
    db.query(
        'INSERT INTO matches (date, location, mode, matchPlayersOneFront, matchPlayersOneBack, matchPlayersTwoFront, matchPlayersTwoBack, matchGoalsRoundOneTeamOne, matchGoalsRoundOneTeamTwo, matchGoalsRoundTwoTeamOne, matchGoalsRoundTwoTeamTwo, winner) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
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
            winner,
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

app.get('/matches', (req, res) => {
    db.query('SELECT * FROM matches', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/deleteMatch', (req, res) => {
    const matchId = req.body.matchId
    db.query('DELETE FROM matches WHERE id = ?', [matchId], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('match deleted')
        }
    })
})

app.listen(3001, () => {
    console.log('Server is running on Port 3001')
})
