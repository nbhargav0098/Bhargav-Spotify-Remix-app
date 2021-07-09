import {Component} from 'react'
import moment from 'moment'
import DisplayEditorsChoice from '../DisplayEditorsChoice'
import './index.css'

class EditorsPick extends Component {
  state = {title: '', editorsPickData: []}

  componentDidUpdate() {
    this.userPickData()
  }

  userPickData = async () => {
    const {country} = this.props
    const token = localStorage.getItem('pa_token', '')
    const timestamp = moment(new Date()).format('YYYY-MM-DDTHH:00:00')
    const apiUrl = `https://api.spotify.com/v1/browse/featured-playlists?country=${country}&timestamp=${timestamp}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const userPickResponse = await fetch(apiUrl, options)
    const userPickDetails = await userPickResponse.json()
    this.setState({
      title: userPickDetails.message,
      editorsPickData: userPickDetails.playlists.items,
    })
  }

  render() {
    const {title, editorsPickData} = this.state
    return (
      <>
        <h1 className="title">{title}</h1>
        <div className="editors-pick-content-container">
          {editorsPickData.map(eachSong => (
            <DisplayEditorsChoice songs={eachSong} key={eachSong.id} />
          ))}
        </div>
      </>
    )
  }
}
export default EditorsPick
