import {Component} from 'react'
import SideNavBar from '../SideNavBar'
import './index.css'

class Profile extends Component {
  state = {userDetails: '', followers: ''}

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
    const followersData = fetchedData.followers.total
    this.setState({userDetails: fetchedData, followers: followersData})
  }

  logoutFromAccount = () => {
    const {history} = this.props
    localStorage.removeItem('pa_token')
    history.replace('/login')
  }

  render() {
    const {userDetails, followers} = this.state
    console.log(userDetails)
    return (
      <div className="profile-bg-container">
        <SideNavBar />
        <div className="profile-content-container">
          <img
            src="https://res.cloudinary.com/dnjj1m9j1/image/upload/v1625819075/Group_1_fu6cgn.png"
            className="profile-pick"
            alt="profilePick"
          />
          <h1 className="user-name">{userDetails.display_name}</h1>
          <div className="followers-playlist-container">
            <div className="followers-container">
              <p className="followers-count">{followers}</p>
              <p className="followers-heading">Followers</p>
            </div>
          </div>
          <button
            type="button"
            className="logout-btn"
            onClick={this.logoutFromAccount}
          >
            Logout
          </button>
        </div>
      </div>
    )
  }
}
export default Profile
