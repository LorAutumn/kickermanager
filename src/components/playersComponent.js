import React, { useState } from 'react'

function PlayersComponent() {
    const [showNewPlayer, setShowNewPlayer] = useState(true)
    const [newPlayerName, setNewPlayerName] = useState('')
    const [newPlayerLocation, setNewPlayerLocation] = useState('')

    console.log('name', newPlayerName, 'location', newPlayerLocation)

    return (
        <div className='players-wrapper'>
            <div>
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
                <button onClick={() => setShowNewPlayer(!showNewPlayer)}>
                    add new Player
                </button>
            </div>
        </div>
    )
}

export default PlayersComponent
