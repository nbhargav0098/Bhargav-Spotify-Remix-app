import {Component} from 'react'
import {Link} from 'react-router-dom'
import BackArrow from '../BackArrow'
import SideNavBar from '../SideNavBar'
import SpecificYourPlayList from '../SpecificYourPlayList'
import './index.css'

class PlayLists extends Component {
  state = {myPlayLists: []}

  componentDidMount() {
    this.getDataFromOthers()
  }

  getDataFromOthers = async () => {
    const token = localStorage.getItem('pa_token', '')
    const apiUrl = `https://api.spotify.com/v1/me`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const userDataResponse = await fetch(apiUrl, options)
    const userResponseData = await userDataResponse.json()
    const username = userResponseData.id
    const playListsApi = `https://api.spotify.com/v1/users/${username}/playlists?limit=50`
    const newToken = localStorage.getItem('pa_token', '')
    const option = {
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
      method: 'GET',
    }
    const playListsResponse = await fetch(playListsApi, option)
    const playListsData = await playListsResponse.json()
    this.setState({myPlayLists: playListsData.items})
  }

  render() {
    const {myPlayLists} = this.state
    return (
      <div className="playlist-page-bg-container">
        <SideNavBar />
        <div className="categories-content-container">
          <Link to="/">
            <BackArrow />
          </Link>
          <div className="playlist-content-container">
            <h1 className="your-playlists-heading">Your Playlists</h1>
            <div className="your-play-list-group-container">
              {myPlayLists.map(eachYourPlayList => (
                <SpecificYourPlayList
                  eachPlayListContent={eachYourPlayList}
                  key={eachYourPlayList.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PlayLists
