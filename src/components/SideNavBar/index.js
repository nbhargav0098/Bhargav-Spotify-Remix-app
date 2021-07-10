import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IconContext} from 'react-icons'
import {CgProfile} from 'react-icons/cg'
import {AiFillHome} from 'react-icons/ai'
import {FaMusic} from 'react-icons/fa'
import {RiPlayListFill} from 'react-icons/ri'
import './index.css'

class SideNavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="profile-container">
          <Link to="/profile">
            <img
              src="https://res.cloudinary.com/do4qwwms8/image/upload/v1625029477/Spotify%20Clone/music_sjt9vm.png"
              className="profile"
              alt="profile-img"
            />
          </Link>
        </div>
        <div className="routes-container">
          <Link to="/profile">
            <div className="route-container-profile">
              <IconContext.Provider
                value={{style: {fontSize: '40px', color: '#9B9B9B'}}}
              >
                <div>
                  <CgProfile />
                </div>
              </IconContext.Provider>
              <p className="nav-name">Profile</p>
            </div>
          </Link>
          <Link to="/">
            <div className="route-container-home">
              <IconContext.Provider
                value={{style: {fontSize: '38px', color: '#9B9B9B'}}}
              >
                <div>
                  <AiFillHome />
                </div>
              </IconContext.Provider>
              <p className="nav-name">Home</p>
            </div>
          </Link>
          <Link to="/YourMusic">
            <div className="route-container-music">
              <IconContext.Provider
                value={{style: {fontSize: '32px', color: '#9B9B9B'}}}
              >
                <div>
                  <FaMusic />
                </div>
              </IconContext.Provider>
              <p className="nav-name">Your Music</p>
            </div>
          </Link>
          <Link to="/PlayLists/">
            <div className="route-container-playlist">
              <IconContext.Provider
                value={{style: {fontSize: '35px', color: '#9B9B9B'}}}
              >
                <div>
                  <RiPlayListFill />
                </div>
              </IconContext.Provider>
              <p className="nav-name">PlayLists</p>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
export default SideNavBar
