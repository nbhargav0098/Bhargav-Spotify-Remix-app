import {Component} from 'react'
import {Link} from 'react-router-dom'
import BackArrow from '../BackArrow'
import SpecificPlayListSongDetails from '../SpecificPlayListSongDetails'
import './index.css'
import SideNavBar from '../SideNavBar'

class SpecificPlayList extends Component {
  state = {playListDetails: [], playListPoster: '', playListTrackItems: []}

  componentDidMount() {
    this.getSpecificPlayListData()
  }

  getSpecificPlayListData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const specificPlayListApi = `https://api.spotify.com/v1/users/spotify/playlists/${id}`
    const token = localStorage.getItem('pa_token', '')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const specificPlayListResponse = await fetch(specificPlayListApi, options)
    const specificPlayListDetails = await specificPlayListResponse.json()
    this.setState({
      playListDetails: specificPlayListDetails,
      playListPoster: specificPlayListDetails.images[0].url,
      playListTrackItems: specificPlayListDetails.tracks.items,
    })
  }

  render() {
    const {playListDetails, playListPoster, playListTrackItems} = this.state
    return (
      <div className="specific-players-list-bg-container">
        <SideNavBar />
        <div className="specific-players-list-content-container">
          <Link to="/">
            <BackArrow />
          </Link>
          <div className="top-part">
            <img
              src={playListPoster}
              alt={playListDetails.name}
              className="poster-props"
            />
            <div className="top-sub-part">
              <h1 className="players-list-title">{playListDetails.name}</h1>
              <p className="player-list-description">
                {playListDetails.description}
              </p>
            </div>
          </div>
          <div className="specific-play-list-songs-container">
            <div className="specific-play-list-titles-container">
              <div className="play-list-titles-container">
                <p className="specific-play-list-titles">Track</p>
              </div>
              <div className="play-list-titles-container">
                <p className="specific-play-list-titles">Album</p>
              </div>
              <div className="play-list-titles-container">
                <p className="specific-play-list-titles">Time</p>
              </div>
              <div className="play-list-titles-container">
                <p className="specific-play-list-titles">Artist</p>
              </div>
              <div className="play-list-titles-container">
                <p className="specific-play-list-titles">Added</p>
              </div>
            </div>
            <hr className="line" />
            <ol className="ordered-list-items">
              {playListTrackItems.map(eachItem => (
                <SpecificPlayListSongDetails
                  playListTrackDetails={eachItem}
                  key={eachItem.track.name}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
export default SpecificPlayList
