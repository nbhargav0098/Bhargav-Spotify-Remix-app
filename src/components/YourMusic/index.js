import {Component} from 'react'
import {Link} from 'react-router-dom'
import BackArrow from '../BackArrow'
import SideNavBar from '../SideNavBar'
import YourMusicList from '../YourMusicList'
import MusicPlayer from '../MusicPlayer'
import './index.css'

class YourMusic extends Component {
  state = {yourMusicData: [], songUniqueId: ''}

  componentDidMount() {
    this.getInfo()
  }

  getInfo = async () => {
    const token = localStorage.getItem('pa_token', '')
    const apiUrl = `https://api.spotify.com/v1/me/tracks`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const yourMusicResponse = await fetch(apiUrl, options)
    const yourMusicResponseData = await yourMusicResponse.json()
    this.setState({yourMusicData: yourMusicResponseData.items})
  }

  getSpecificSongId = uniqueId => {
    this.setState({songUniqueId: uniqueId})
  }

  render() {
    const {yourMusicData, songUniqueId} = this.state
    return (
      <div className="music-page-bg-container">
        <SideNavBar />
        <div className="music-main-content-container">
          <Link to="/" className="link">
            <BackArrow />
          </Link>
          <div className="music-page-content">
            <h1 className="your-music-heading">Your Music</h1>
            {yourMusicData.map(eachMusicData => (
              <YourMusicList
                musicDetails={eachMusicData}
                key={eachMusicData.track.id}
                getSpecificSongId={this.getSpecificSongId}
              />
            ))}
          </div>
          {songUniqueId !== '' && (
            <MusicPlayer
              songsUniqueId={songUniqueId}
              className="bottom-music-player"
            />
          )}
        </div>
      </div>
    )
  }
}
export default YourMusic
