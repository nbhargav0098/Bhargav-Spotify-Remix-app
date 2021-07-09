import {Component} from 'react'
import SideNavBar from '../SideNavBar'
import EditorsPick from '../EditorsPick'
import GenresMoods from '../GenresMoods'
import NewReleases from '../NewReleases'
import './index.css'

class SpotifyClone extends Component {
  state = {country: ''}

  componentDidMount() {
    this.getInfo()
  }

  getInfo = async () => {
    const token = localStorage.getItem('pa_token', '')
    const apiUrl = `https://api.spotify.com/v1/me`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    this.setState({country: fetchedData.country})
  }

  render() {
    const {country} = this.state
    return (
      <div className="home-page-bg-container">
        <SideNavBar />
        <div className="homepage-content-container">
          <div>
            <EditorsPick country={country} />
          </div>
          <div>
            <GenresMoods country={country} />
          </div>
          <div>
            <NewReleases country={country} />
          </div>
        </div>
      </div>
    )
  }
}

export default SpotifyClone
