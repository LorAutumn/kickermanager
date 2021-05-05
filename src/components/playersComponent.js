import React, { useEffect, useState, useContext } from 'react'
import { StateContext } from '../App'
import Axios from 'axios'

function PlayersComponent() {
    const [newPlayerName, setNewPlayerName] = useState('')
    const [newPlayerLocation, setNewPlayerLocation] = useState('')
    const [addPlayerState, setAddPlayerState] = useState(false)
    const stateContext = useContext(StateContext)
    const playersList = stateContext.playersList
    const setPlayersList = stateContext.setPlayersList

    console.log('name', newPlayerName, 'location', newPlayerLocation)
    console.log('list of players: ', playersList)

    const getPlayers = () => {
        Axios.get('http://localhost:3001/players').then(response => {
            console.log(response)
            setPlayersList(response.data)
        })
    }

    useEffect(() => {
        getPlayers()
    }, [])

    const addPlayer = () => {
        Axios.post('http://localhost:3001/addPlayer', {
            name: newPlayerName,
            location: newPlayerLocation,
        }).then(() => {
            console.log('New Player added')
            setAddPlayerState(!addPlayerState)
            getPlayers()
        })
    }

    return (
        <div className='players-wrapper'>
            <button
                className='add-new-player-button'
                onClick={() => setAddPlayerState(!addPlayerState)}>
                add new Player
            </button>
            {addPlayerState ? (
                <div className='add-new-player'>
                    <h3>add new Player:</h3>
                    <input
                        type='text'
                        placeholder='Player Name'
                        onChange={e => setNewPlayerName(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Player Location'
                        onChange={e => setNewPlayerLocation(e.target.value)}
                    />
                    <button
                        className='add-player-submit-button'
                        onClick={() => addPlayer()}>
                        add Player
                    </button>
                    <button
                        className='cancel-add-new-player'
                        onClick={() => setAddPlayerState(!addPlayerState)}>
                        x
                    </button>
                </div>
            ) : null}

            <hr />
            <h3>List of Players:</h3>
            <div className='list-players'>
                <table className='list-players-table'>
                    <tr>
                        <th id='list-players-table-first-row'>Name</th>
                        <th id='list-players-table-first-row'>Location</th>
                    </tr>
                    {playersList.map(player => {
                        return (
                            <tr className='list-players-row' key={player.id}>
                                <th className='player-name'>{player.name}</th>
                                <th className='player-location'>
                                    {player.location}
                                </th>
                            </tr>
                        )
                    })}
                </table>
            </div>
            {/*<div className='list-players'>
                {playersList.map(player => {
                    return (
                        <ul key={player.id}>
                            <li className='player-name'>
                                Player Name: {player.name}
                            </li>
                            <li className='player-location'>
                                Player Location: {player.location}
                            </li>
                        </ul>
                    )
                })}
            </div> */}
        </div>
    )
}

export default PlayersComponent
