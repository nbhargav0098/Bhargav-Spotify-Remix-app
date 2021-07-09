import {Component} from 'react'
import DisplayNewReleases from '../DisplayNewReleases'
import './index.css'

class NewReleases extends Component {
  state = {newReleasesData: []}

  componentDidUpdate() {
    this.userNewReleasesData()
  }

  userNewReleasesData = async () => {
    const {country} = this.props
    const token = localStorage.getItem('pa_token', '')
    const newReleasesapiUrl = `https://api.spotify.com/v1/browse/new-releases?country=${country}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const userNewReleasesResponse = await fetch(newReleasesapiUrl, options)
    const userNewReleaseskDetails = await userNewReleasesResponse.json()
    this.setState({
      newReleasesData: userNewReleaseskDetails.albums.items,
    })
  }

  render() {
    const {newReleasesData} = this.state
    return (
      <div className="new-releases-bg-container">
        <h1 className="title">New Releases</h1>
        <div className="new-releases-content-container">
          {newReleasesData.map(newReleasesSong => (
            <DisplayNewReleases
              newReleasessongs={newReleasesSong}
              key={newReleasesSong.id}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default NewReleases
