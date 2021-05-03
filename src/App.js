import { useState, createContext } from 'react'
import './styles/app.css'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import HomeComponent from './components/homeComponent'
import NewMatchComponent from './components/newMatchComponent'
import PlayersComponent from './components/playersComponent'

export const StateContext = createContext()

function App() {
    const [newMatch, startNewMatch] = useState(true)
    const [playersList, setPlayersList] = useState([{ name: '', location: '' }])
    const [gameMode, setGameMode] = useState('One-Match')
    const [matchDate, setMatchDate] = useState()
    const [matchLocation, setMatchLocation] = useState('')
    const [matchPlayers, setMatchPlayers] = useState([
        {
            TeamOneFront: '',
            TeamOneBack: '',
            TeamTwoFront: '',
            TeamTwoBack: '',
        },
    ])
    const [matchGoals, setMatchGoals] = useState([
        {
            FirstRoundT1: 0,
            FirstRoundT2: 0,
            SecondRoundT1: 0,
            SecondRoundT2: 0,
        },
    ])

    const stateCollection = {
        playersList: playersList,
        setPlayersList: setPlayersList,
        gameMode: gameMode,
        setGameMode: setGameMode,
        matchPlayers: matchPlayers,
        setMatchPlayers: setMatchPlayers,
        matchDate: matchDate,
        setMatchDate: setMatchDate,
        matchLocation: matchLocation,
        setMatchLocation: setMatchLocation,
        matchGoals: matchGoals,
        setMatchGoals: setMatchGoals,
    }

    return (
        <div className='App'>
            <BrowserRouter>
                <StateContext.Provider value={stateCollection}>
                    <header className='App-header'>
                        <h1>Kicker Manager</h1>
                        <nav>
                            <ul>
                                <Link to='/'>
                                    <li className='home'>Home</li>
                                </Link>
                                <Link to='/newMatch'>
                                    <li className='newMatch'>new Match</li>
                                </Link>
                                <Link to='/players'>
                                    <li className='players'>Players</li>
                                </Link>
                                <li>Encounters</li>
                            </ul>
                        </nav>
                    </header>
                    <main>
                        <div className='main-wrapper'>
                            {
                                <Switch>
                                    <Route
                                        path='/'
                                        component={HomeComponent}
                                        exact
                                    />
                                    <Route
                                        path='/newMatch'
                                        component={NewMatchComponent}
                                        exact
                                    />
                                    <Route
                                        path='/players'
                                        component={PlayersComponent}
                                        exact
                                    />
                                </Switch>
                            }
                        </div>
                    </main>
                    <footer>footer</footer>
                </StateContext.Provider>
            </BrowserRouter>
        </div>
    )
}

export default App
