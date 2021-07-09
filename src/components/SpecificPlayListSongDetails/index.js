import moment from 'moment'
import './index.css'

const SpecificPlayListSongDetails = props => {
  const {playListTrackDetails} = props
  return (
    <li className="lists-container">
      <div className="track-container">
        <p className="track-name">{playListTrackDetails.track.name}</p>
      </div>
      <div className="track-container">
        <p className="album-name">{playListTrackDetails.track.album.name}</p>
      </div>
      <div className="track-container">
        <p className="track-duration">
          {playListTrackDetails.track.duration_ms}
        </p>
      </div>
      <div className="track-container">
        <p className="track-artists">
          {playListTrackDetails.track.artists[0].name}
        </p>
      </div>
      <div className="track-container">
        <p className="track-added-at">
          {moment(
            playListTrackDetails.track.album.release_date,
            'YYYY-MM-DD',
          ).fromNow()}
        </p>
      </div>
    </li>
  )
}
export default SpecificPlayListSongDetails
