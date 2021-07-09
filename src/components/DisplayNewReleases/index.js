import {Link} from 'react-router-dom'
import './index.css'

const DisplayNewReleases = props => {
  const {newReleasessongs} = props
  return (
    <div className="new-release-song-container">
      <Link to={`/specificNewReleases/${newReleasessongs.id}`}>
        <img
          src={newReleasessongs.images[0].url}
          className="new-releases-img"
          alt={`${newReleasessongs.name}`}
        />
      </Link>
    </div>
  )
}
export default DisplayNewReleases
