import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SpotifyClone from './components/SpotifyClone'
import LoginForm from './components/LoginForm'
import SpecificPlayList from './components/SpecificPlayList'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './components/Profile'
import Categories from './components/Categories'
import SpecificNewReleases from './components/SpecificNewReleases'
import YourMusic from './components/YourMusic'
import PlayLists from './components/PlayLists'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={SpotifyClone} />
      <ProtectedRoute
        exact
        path="/specificPlaylist/:id"
        component={SpecificPlayList}
      />
      <ProtectedRoute exact path="/categories/:id" component={Categories} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <ProtectedRoute
        exact
        path="/specificNewReleases/:id"
        component={SpecificNewReleases}
      />
      <ProtectedRoute exact path="/YourMusic" component={YourMusic} />
      <ProtectedRoute exact path="/PlayLists/" component={PlayLists} />
    </Switch>
  </BrowserRouter>
)

export default App
