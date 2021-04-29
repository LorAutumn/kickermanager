import React, { useState, useContext } from 'react'
import { StateContext } from '../App'
import SelectPlayerComponent from './selectPlayerComponent'

function NewMatchComponent() {
    const stateContext = useContext(StateContext)
    const playersList = stateContext.playersList
    const gameMode = stateContext.gameMode
    const setGameMode = stateContext.setGameMode
    const matchPlayers = stateContext.matchPlayers
    const setMatchPlayers = stateContext.setMatchPlayers
    const matchDate = stateContext.matchDate
    const setMatchDate = stateContext.setMatchDate

    const updatePlayer = e => {
        const { name, value } = e.target
        setMatchPlayers(prevState => [
            {
                ...prevState[0],
                [name]: value,
            },
        ])
    }

    console.log(matchPlayers)

    return (
        <div className='new-match-wrapper'>
            <div>
                <h3>New Match</h3>
                <div className='encounter'>
                    <h2>Encounter:</h2>
                    <label>date:</label>
                    <input
                        type='date'
                        onChange={e => setMatchDate(e.target.value)}
                    />
                    <label>location:</label>
                    <input type='text' />
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
                                <option name='TeamOneFront' value={player.name}>
                                    {player.name}
                                </option>
                            )
                        })}
                    </select>
                    <label>Back</label>
                    <select name='TeamOneBack' onChange={updatePlayer}>
                        {playersList.map(player => {
                            return (
                                <option name='TeamOneBack' value={player.name}>
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
                                <option name='TeamOneBack' value={player.name}>
                                    {player.name}
                                </option>
                            )
                        })}
                    </select>
                    <label>Back</label>
                    <select name='TeamTwoBack' onChange={updatePlayer}>
                        {playersList.map(player => {
                            return (
                                <option name='TeamOneBack' value={player.name}>
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
                    <input type='number' placeholder='0' />
                    <span>:</span>
                    <label>Team 2:</label>
                    <input type='number' placeholder='0' />
                    <br />
                    <label>Team 1:</label>
                    <input type='number' placeholder='0' />
                    <span>:</span>
                    <label>Team 2:</label>
                    <input type='number' placeholder='0' />
                </div>
            </div>
        </div>
    )
}

export default NewMatchComponent
