import {Component} from 'react'
import SideNavBar from '../SideNavBar'
import YourMusicList from '../YourMusicList'
import './index.css'

class YourMusic extends Component {
  state = {yourMusicData: []}

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

  render() {
    const {yourMusicData} = this.state
    return (
      <div className="music-page-bg-container">
        <SideNavBar />
        <div className="musicpage-content-container">
          <ul>
            <h1 className="your-music-heading">Your Music</h1>
            {yourMusicData.map(eachMusicData => (
              <YourMusicList
                musicDetails={eachMusicData}
                key={eachMusicData.track.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default YourMusic
