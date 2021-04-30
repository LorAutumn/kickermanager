import React, { useEffect, useState, useContext } from 'react'
import { StateContext } from '../App'
import Axios from 'axios'

function PlayersComponent() {
    const [newPlayerName, setNewPlayerName] = useState('')
    const [newPlayerLocation, setNewPlayerLocation] = useState('')
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

    getPlayers()
    useEffect(() => {
        getPlayers()
    }, [])

    const addPlayer = () => {
        Axios.post('http://localhost:3001/addPlayer', {
            name: newPlayerName,
            location: newPlayerLocation,
        }).then(() => {
            console.log('New Player added')
            getPlayers()
        })
    }

    return (
        <div className='players-wrapper'>
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
                <button onClick={() => addPlayer()}>add new Player</button>
            </div>
            <hr />
            <h3>List of Players:</h3>
            <div className='list-players'>
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
            </div>
        </div>
    )
}

export default PlayersComponent
