import React, { useState, useContext } from 'react'
import { PlayersContext } from '../App'

function NewMatchComponent() {
    const playersContext = useContext(PlayersContext)
    const playersList = playersContext.playersList

    return (
        <div className='new-match-wrapper'>
            <div>
                <h3>New Match</h3>
                <div className='encounter'>
                    <h2>Encounter:</h2>
                    <label>date:</label>
                    <input type='date' />
                    <label>location:</label>
                    <input type='text' />
                </div>
                <br />
                <div>
                    <label>mode: </label>
                    <input type='text' />
                </div>
                <br />
                <div>
                    <label>Team 1: </label>
                    <input type='text' placeholder='Player 1' />
                    <input type='text' placeholder='Player 2' />
                    <br />
                    <label>Team 2: </label>
                    <input type='text' placeholder='Player 1' />
                    <input type='text' placeholder='Player 2' />
                </div>
                <br />
                <div>
                    <label>Results Round 1</label>
                    <input type='text' placeholder='Team 1' />
                    <span>:</span>
                    <input type='text' placeholder='Team 2' />
                    <br />
                    <label>Results Round 2</label>
                    <input type='text' placeholder='Team 1' />
                    <span>:</span>
                    <input type='text' placeholder='Team 2' />
                </div>
            </div>
        </div>
    )
}

export default NewMatchComponent
