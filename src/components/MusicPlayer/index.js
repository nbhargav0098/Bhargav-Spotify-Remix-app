import ReactAudioPlayer from 'react-audio-player'
import './index.css'

const MusicPlayer = props => {
  const {songsUniqueId} = props
  console.log(songsUniqueId)
  const songImg = songsUniqueId.track.album.images[2].url
  const trackName = songsUniqueId.track.name
  const artistName = songsUniqueId.track.artists[0].name
  const audioTrack = songsUniqueId.track.preview_url
  return (
    <div className="music-player-container">
      <div className="playing-album-container">
        <img src={songImg} alt={trackName} className="music-heading" />
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

export default MusicPlayer
