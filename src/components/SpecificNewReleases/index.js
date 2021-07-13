import {Component} from 'react'
import {Link} from 'react-router-dom'
import SpecificNewReleaseSongDetails from '../SpecificNewReleaseSongDetails'
import BackArrow from '../BackArrow'
import './index.css'
import SideNavBar from '../SideNavBar'
import NewReleasesMusicPlayer from '../NewReleasesMusicPlayer'

class SpecificNewReleases extends Component {
  state = {
    specificNewReleasesDetails: [],
    specificNewReleasesPoster: '',
    specificNewReleasesItems: [],
    specificSongDetails: '',
  }

  componentDidMount() {
    this.getSpecificNewReleasesData()
  }

  getSpecificNewReleasesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const specificNewReleasesApi = `https://api.spotify.com/v1/albums/${id}`
    const token = localStorage.getItem('pa_token', '')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const specificNewReleasesDataResponse = await fetch(
      specificNewReleasesApi,
      options,
    )
    const specificNewReleasesDataDetails = await specificNewReleasesDataResponse.json()
    this.setState({
      specificNewReleasesDetails: specificNewReleasesDataDetails,
      specificNewReleasesPoster: specificNewReleasesDataDetails.images[0].url,
      specificNewReleasesItems: specificNewReleasesDataDetails.tracks.items,
    })
  }

  getSpecificSongDetails = (albumPoster, uniqueDetails) => {
    const albumDetails = {albumPoster, uniqueDetails}
    this.setState({specificSongDetails: albumDetails})
  }

  render() {
    const {
      specificNewReleasesDetails,
      specificNewReleasesPoster,
      specificNewReleasesItems,
      specificSongDetails,
    } = this.state
    return (
      <div className="specific-new-releases-bg-container">
        <SideNavBar />
        <div className="specific-new-releases-content-container">
          <Link to="/">
            <BackArrow />
          </Link>
          <div className="new-releases-top-part">
            <img
              src={specificNewReleasesPoster}
              alt={specificNewReleasesDetails.name}
              className="new-releases-poster-props"
            />
            <div className="new-releases-top-sub-part">
              <h1 className="new-releases-title">
                {specificNewReleasesDetails.name}
              </h1>
              <p className="new-releases-description">
                {specificNewReleasesDetails.description}
              </p>
            </div>
          </div>
          <div className="specific-new-songs-container">
            <div className="specific-new-list-titles-container">
              <div className="new-titles-container">
                <p className="specific-new-list-titles">Track</p>
              </div>
              <div className="new-titles-container">
                <p className="specific-new-list-titles">Time</p>
              </div>
            </div>
            <hr className="line" />
            <div className="new-ordered-list-items">
              {specificNewReleasesItems.map(eachNewReleaseItem => (
                <SpecificNewReleaseSongDetails
                  newReleaseTrackDetails={eachNewReleaseItem}
                  commonPosters={specificNewReleasesPoster}
                  getSpecificSongDetails={this.getSpecificSongDetails}
                  key={eachNewReleaseItem.track_number}
                />
              ))}
            </div>
          </div>
          {specificSongDetails !== '' && (
            <NewReleasesMusicPlayer
              songsUniqueDetails={specificSongDetails}
              className="bottom-music-player"
            />
          )}
        </div>
      </div>
    )
  }
}
export default SpecificNewReleases
