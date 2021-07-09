import {Link} from 'react-router-dom'
import './index.css'

const DisplayEditorsChoice = props => {
  const {songs} = props
  return (
    <div className="each-song-container">
      <Link to={`/specificPlaylist/${songs.id}`}>
        <img
          src={songs.images[0].url}
          className="editors-choice-img"
          alt={`${songs.name}`}
        />
      </Link>
    </div>
  )
}
export default DisplayEditorsChoice
