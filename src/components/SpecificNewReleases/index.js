import {Component} from 'react'
import {Link} from 'react-router-dom'
import BackArrow from '../BackArrow'
import './index.css'
import SideNavBar from '../SideNavBar'

class SpecificNewReleases extends Component {
  state = {
    specificNewReleasesDetails: [],
    specificNewReleasesPoster: '',
    /* specificNewReleasesItems: [], */
  }

  componentDidMount() {
    this.getSpecificNewReleasesData()
  }

  getSpecificNewReleasesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const specificPlayListApi = `https://api.spotify.com/v1/albums/${id}`
    const token = localStorage.getItem('pa_token', '')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const specificNewReleasesDataResponse = await fetch(
      specificPlayListApi,
      options,
    )
    const specificNewReleasesDataDetails = await specificNewReleasesDataResponse.json()

    const specificNewReleasesPosterUrl =
      specificNewReleasesDataDetails.images[0].url
    /* const specificNewReleasesSongs = specificNewReleasesDataDetails.tracks.items */
    this.setState({
      specificNewReleasesDetails: specificNewReleasesDataDetails,
      specificNewReleasesPoster: specificNewReleasesPosterUrl,
      /* specificNewReleasesItems: specificNewReleasesSongs, */
    })
  }

  render() {
    const {
      specificNewReleasesDetails,
      specificNewReleasesPoster,
      /* specificNewReleasesItems, */
    } = this.state
    console.log(specificNewReleasesDetails)
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
        </div>
      </div>
    )
  }
}
export default SpecificNewReleases
