import ReactAudioPlayer from 'react-audio-player'
import './index.css'

const NewReleasesMusicPlayer = props => {
  const {songsUniqueDetails} = props
  const songImg = songsUniqueDetails.albumPoster
  const trackName = songsUniqueDetails.uniqueDetails.name
  const artistName = songsUniqueDetails.uniqueDetails.artists[0].name
  const audioTrack = songsUniqueDetails.uniqueDetails.preview_url
  return (
    <div className="music-player-container">
      <div className="playing-album-container">
        <img src={songImg} alt={trackName} className="music-poster" />
        <div className="song-name-artist">
          <p className="music-player-song">{trackName}</p>
          <p className="music-player-artist">{artistName}</p>
        </div>
      </div>
      <div className="audio-player">
        <ReactAudioPlayer
          src={audioTrack}
          autoPlay
          controls
          className="music-bar"
        />
      </div>
    </div>
  )
}

export default NewReleasesMusicPlayer
