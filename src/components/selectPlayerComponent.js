/*
import React, { useContext } from 'react'
import { StateContext } from '../App'

function SelectPlayerComponent() {
    const stateContext = useContext(StateContext)
    const matchPlayers = stateContext.matchPlayers
    const setMatchPlayers = stateContext.setMatchPlayers

    return (
        <select
            value={e => {
                e.target.value
            }}
            onChange={(value = e.target.value)}>
            <option value='One-Match'>One-Match</option>
            {playersList.map(player => {
                return <option value={player.name}>{player.name}</option>
            })}
        </select>
    )
}

<select
                        value={gameMode}
                        onChange={e => {
                            setGameMode(e.target.value)
                        }}>
                        <option value='One-Match'>One-Match</option>
                        <option value='Best-of-3'>Best-of-3</option>
                        <option value='Best-of-5'>Best-of-5</option>
                    </select>

export default SelectPlayerComponent
*/
