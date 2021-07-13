import './index.css'

const YourMusicList = props => {
  const {musicDetails, getSpecificSongId} = props
  function getProperDuration(millisec) {
    const minutes = Math.floor(millisec / 60000)
    const seconds = ((millisec % 60000) / 1000).toFixed(0)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }
  const onClickSpecifiSong = () => {
    getSpecificSongId(musicDetails)
  }

  const duration = getProperDuration(musicDetails.track.duration_ms)

  return (
    <li className="your-music-list" onClick={onClickSpecifiSong}>
      <div className="music-content">
        <img
          src={musicDetails.track.album.images[1].url}
          alt={musicDetails.name}
          className="music-poster"
        />
        <div className="music-track-details">
          <p className="music-track-title">{musicDetails.track.name}</p>
          <p className="artists">{musicDetails.track.artists[0].name}</p>
        </div>
      </div>
      <p className="time-duration">{duration}</p>
    </li>
  )
}
export default YourMusicList
