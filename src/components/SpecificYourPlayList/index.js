import './index.css'

const SpecificYourPlayList = props => {
  const {eachPlayListContent} = props
  return (
    <div className="each-playlist-container">
      <img
        src={eachPlayListContent.images[0].url}
        className="each-playlist-img"
        alt={`${eachPlayListContent.name}`}
      />
      <p className="playlist-name">{eachPlayListContent.name}</p>
      <p className="playlist-tracks">
        {eachPlayListContent.tracks.total} Tracks
      </p>
    </div>
  )
}
export default SpecificYourPlayList
