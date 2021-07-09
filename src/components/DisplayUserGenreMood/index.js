import {Link} from 'react-router-dom'
import './index.css'

const DisplayUserGenreMood = props => {
  const {genreMoodsongs} = props
  return (
    <div className="each-song-container">
      <Link to={`/categories/${genreMoodsongs.id}`}>
        <img
          src={genreMoodsongs.icons[0].url}
          className="editors-choice-img"
          alt={`${genreMoodsongs.name}`}
        />
      </Link>
    </div>
  )
}
export default DisplayUserGenreMood
