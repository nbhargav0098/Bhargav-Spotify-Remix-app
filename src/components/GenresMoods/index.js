import {Component} from 'react'
import DisplayUserGenreMood from '../DisplayUserGenreMood'
import './index.css'

class GenresMoods extends Component {
  state = {genresMoodsData: []}

  componentDidMount() {
    this.userGenresMoodsData()
  }

  userGenresMoodsData = async () => {
    const token = localStorage.getItem('pa_token', '')
    const apiUrl = `https://api.spotify.com/v1/browse/categories`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const userGenreMoodResponse = await fetch(apiUrl, options)
    const userGenreMoodDetails = await userGenreMoodResponse.json()
    this.setState({
      genresMoodsData: userGenreMoodDetails.categories.items,
    })
  }

  render() {
    const {genresMoodsData} = this.state
    return (
      <div className="geners-mood-bg-container">
        <h1 className="title">Genres & Moods</h1>
        <div className="geners-mood-content-container">
          {genresMoodsData.map(generMoodeachSong => (
            <DisplayUserGenreMood
              genreMoodsongs={generMoodeachSong}
              key={generMoodeachSong.id}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default GenresMoods
