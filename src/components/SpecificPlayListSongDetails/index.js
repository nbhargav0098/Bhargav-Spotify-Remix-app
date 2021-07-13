import moment from 'moment'
import './index.css'

const SpecificPlayListSongDetails = props => {
  const {playListTrackDetails, getSpecificSongId} = props
  function getProperDuration(millisec) {
    const minutes = Math.floor(millisec / 60000)
    const seconds = ((millisec % 60000) / 1000).toFixed(0)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }
  const onClickSpecificSong = () => {
    getSpecificSongId(playListTrackDetails)
  }

  const duration = getProperDuration(playListTrackDetails.track.duration_ms)
  return (
    <li className="lists-container" onClick={onClickSpecificSong}>
      <div className="track-container">
        <p className="track-name">{playListTrackDetails.track.name}</p>
      </div>
      <div className="track-container">
        <p className="album-name">{playListTrackDetails.track.album.name}</p>
      </div>
      <div className="track-container">
        <p className="track-duration">{duration}</p>
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
