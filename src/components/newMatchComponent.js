import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from '../App'
import Axios from 'axios'

function NewMatchComponent() {
    const stateContext = useContext(StateContext)
    const playersList = stateContext.playersList
    const gameMode = stateContext.gameMode
    const setGameMode = stateContext.setGameMode
    const matchPlayers = stateContext.matchPlayers
    const setMatchPlayers = stateContext.setMatchPlayers
    const matchDate = stateContext.matchDate
    const setMatchDate = stateContext.setMatchDate
    const matchLocation = stateContext.matchLocation
    const setMatchLocation = stateContext.setMatchLocation
    const matchGoals = stateContext.matchGoals
    const setMatchGoals = stateContext.setMatchGoals
    const [matchesList, setMatchesList] = useState([])
    const [addNewMatch, setAddNewMatch] = useState(false)

    useEffect(() => {
        getMatches()
    }, [])

    const updatePlayer = e => {
        const { name, value } = e.target
        setMatchPlayers(prevState => [
            {
                ...prevState[0],
                [name]: value,
            },
        ])
    }

    const updateGoals = e => {
        const { name, value } = e.target
        setMatchGoals(prevState => [
            {
                ...prevState[0],
                [name]: value,
            },
        ])
    }

    const addMatch = () => {
        Axios.post('http://localhost:3001/addMatch', {
            date: matchDate,
            location: matchLocation,
            mode: gameMode,
            teamOneFront: matchPlayers[0].TeamOneFront,
            teamOneBack: matchPlayers[0].TeamOneBack,
            teamTwoFront: matchPlayers[0].TeamTwoFront,
            teamTwoBack: matchPlayers[0].TeamTwoBack,
            goalsRoundOneTOne: matchGoals[0].FirstRoundT1,
            goalsRoundOneTTwo: matchGoals[0].FirstRoundT2,
            goalsRoundTwoTOne: matchGoals[0].SecondRoundT1,
            goalsRoundTwoTTwo: matchGoals[0].SecondRoundT2,
        }).then(() => {
            console.log('New Match added')
        })
    }

    const getMatches = () => {
        Axios.get('http://localhost:3001/matches').then(response => {
            console.log(response)
            setMatchesList(response.data)
        })
    }

    return (
        <div className='new-match-wrapper'>
            <h3>List of Matches</h3>
            <button
                className='add-new-match-button'
                onClick={() => setAddNewMatch(!addNewMatch)}>
                add new Match
            </button>
            {addNewMatch ? (
                <div className='add-new-match-box'>
                    <h3>New Match</h3>
                    <div className='encounter'>
                        <h2>Encounter:</h2>
                        <label>date:</label>
                        <input
                            type='date'
                            onChange={e => {
                                setMatchDate(e.target.value)
                            }}
                        />
                        <label>location:</label>
                        <select
                            value={matchLocation}
                            onChange={e => {
                                setMatchLocation(e.target.value)
                            }}>
                            <option value='Wuerzburg'>Wuerzburg</option>
                            <option value='Muenchen'>Muenchen</option>
                            <option value='Berlin'>Berlin</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label className='select-mode'>mode: </label>
                        <select
                            value={gameMode}
                            onChange={e => {
                                setGameMode(e.target.value)
                            }}>
                            <option value='One-Match'>One-Match</option>
                            <option value='Best-of-3'>Best-of-3</option>
                            <option value='Best-of-5'>Best-of-5</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label>Team 1: </label>
                        <label>Front</label>
                        <select name='TeamOneFront' onChange={updatePlayer}>
                            {playersList.map(player => {
                                return (
                                    <option
                                        name='TeamOneFront'
                                        value={player.name}>
                                        {player.name}
                                    </option>
                                )
                            })}
                        </select>
                        <label>Back</label>
                        <select name='TeamOneBack' onChange={updatePlayer}>
                            {playersList.map(player => {
                                return (
                                    <option
                                        name='TeamOneBack'
                                        value={player.name}>
                                        {player.name}
                                    </option>
                                )
                            })}
                        </select>
                        <br />
                        <label>Team 2: </label>
                        <label>Front</label>
                        <select name='TeamTwoFront' onChange={updatePlayer}>
                            {playersList.map(player => {
                                return (
                                    <option
                                        name='TeamOneBack'
                                        value={player.name}>
                                        {player.name}
                                    </option>
                                )
                            })}
                        </select>
                        <label>Back</label>
                        <select name='TeamTwoBack' onChange={updatePlayer}>
                            {playersList.map(player => {
                                return (
                                    <option
                                        name='TeamOneBack'
                                        value={player.name}>
                                        {player.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <br />
                    <div>
                        <label>Results Round 1</label>
                        <br />
                        <label>Team 1:</label>
                        <input
                            name='FirstRoundT1'
                            type='number'
                            placeholder='0'
                            onChange={updateGoals}
                        />
                        <span>:</span>
                        <label>Team 2:</label>
                        <input
                            name='FirstRoundT2'
                            type='number'
                            placeholder='0'
                            onChange={updateGoals}
                        />
                        <br />
                        <label>Results Round 1</label>
                        <br />
                        <label>Team 1:</label>
                        <input
                            name='SecondRoundT1'
                            type='number'
                            placeholder='0'
                            onChange={updateGoals}
                        />
                        <span>:</span>
                        <label>Team 2:</label>
                        <input
                            name='SecondRoundT2'
                            type='number'
                            placeholder='0'
                            onChange={updateGoals}
                        />
                    </div>
                    <br />
                    <button className='submit-match-button' onClick={addMatch}>
                        submit Match
                    </button>
                </div>
            ) : null}
            <div className='list-of-matches'>
                {matchesList.map(match => {
                    return (
                        <ul key={match.id}>
                            <li className='match-date'>
                                Match Date: {match.date}
                            </li>
                            <li className='match-location'>
                                Match Location: {match.location}
                            </li>
                            <li className='match-mode'>
                                Match Mode: {match.mode}
                            </li>
                            <li className='match-team-one'>
                                Team One - Front: {match.matchPlayersOneFront},
                                Back: {match.matchPlayersOneFront}
                            </li>
                            <li className='match-team-two'>
                                Team One - Front: {match.matchPlayersTwoFront},
                                Back: {match.matchPlayersTwoBack}
                            </li>
                            <li className='match-results'>
                                Round One: {match.matchGoalsRoundOneTeamOne} +
                                {match.matchGoalsRoundOneTeamTwo}
                                Round Two: {match.matchGoalsRoundTwoTeamOne}
                            </li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default NewMatchComponent
