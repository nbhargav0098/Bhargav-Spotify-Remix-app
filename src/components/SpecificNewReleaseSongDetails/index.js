import './index.css'

const SpecificNewReleaseSongDetails = props => {
  const {newReleaseTrackDetails, commonPosters, getSpecificSongDetails} = props
  function getProperDuration(millisec) {
    const minutes = Math.floor(millisec / 60000)
    const seconds = ((millisec % 60000) / 1000).toFixed(0)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const onClickSpecificSong = () => {
    getSpecificSongDetails(commonPosters, newReleaseTrackDetails)
  }

  const duration = getProperDuration(newReleaseTrackDetails.duration_ms)
  return (
    <li className="new-release-lists-container" onClick={onClickSpecificSong}>
      <div className="new-release-track-container">
        <p className="new-release-track-name">{newReleaseTrackDetails.name}</p>
      </div>
      <div className="new-release-track-container">
        <p className="new-release-track-duration">{duration}</p>
      </div>
    </li>
  )
}
export default SpecificNewReleaseSongDetails
