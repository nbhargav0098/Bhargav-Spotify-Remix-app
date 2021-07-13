import {Component} from 'react'
import {Link} from 'react-router-dom'
import BackArrow from '../BackArrow'
import SpecificPlayListSongDetails from '../SpecificPlayListSongDetails'
import './index.css'
import SideNavBar from '../SideNavBar'
import MusicPlayer from '../MusicPlayer'

class SpecificPlayList extends Component {
  state = {
    userPlayListDetails: [],
    userPlayListPoster: '',
    userPlayListTrackItems: [],
    songUniqueId: '',
  }

  componentDidMount() {
    this.getSpecificPlayListData()
  }

  getSpecificPlayListData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const userSpecificPlayListApi = `https://api.spotify.com/v1/users/spotify/playlists/${id}`
    const token = localStorage.getItem('pa_token', '')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const userSpecificPlayListResponse = await fetch(
      userSpecificPlayListApi,
      options,
    )
    const userSpecificPlayListDetails = await userSpecificPlayListResponse.json()

    this.setState({
      userPlayListDetails: userSpecificPlayListDetails,
      userPlayListPoster: userSpecificPlayListDetails.images[0].url,
      userPlayListTrackItems: userSpecificPlayListDetails.tracks.items,
    })
  }

  getSpecificSongId = uniqueId => {
    this.setState({songUniqueId: uniqueId})
  }

  render() {
    const {
      userPlayListDetails,
      userPlayListPoster,
      userPlayListTrackItems,
      songUniqueId,
    } = this.state
    return (
      <div className="specific-players-list-bg-container">
        <SideNavBar />
        <div className="specific-players-list-content-container">
          <Link to="/">
            <BackArrow />
          </Link>
          <div className="top-part">
            <img
              src={userPlayListPoster}
              alt={userPlayListDetails.name}
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
            <div className="ordered-list-items">
              {playListTrackItems.map(eachItem => (
                <SpecificPlayListSongDetails
                  playListTrackDetails={eachItem}
                  key={eachItem.track.name}
                  getSpecificSongId={this.getSpecificSongId}
                />
              ))}
            </div>
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
export default SpecificPlayList
