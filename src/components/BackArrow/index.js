import './index.css'
import {IconContext} from 'react-icons'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const BackArrow = () => (
  <div className="back-container">
    <IconContext.Provider value={{style: {fontSize: '30px', color: '#ffffff'}}}>
      <div>
        <AiOutlineArrowLeft />
      </div>
    </IconContext.Provider>
    <p className="back">Back</p>
  </div>
)
export default BackArrow
