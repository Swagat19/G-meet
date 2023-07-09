import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faVideo,
  faMicrophone,
  faPhone,
  faAngleUp,
  faClosedCaptioning,
  faDesktop

} from '@fortawesome/free-solid-svg-icons'
import './CallPageFooter.scss'

const CallPageFooter = ({ setMeetInfoPopup, setStreamObj, streamObj, setoff }) => {
  return (
    <div className='footer-item'>

      <div className='left-item'>
        <div
          className='icon-block1'onClick={() => {
            setMeetInfoPopup(true)
          }}
        >
          Meeting details
          <FontAwesomeIcon className='icon1' icon={faAngleUp} />
        </div>
      </div>

      <div className='center-item'>
        <div className='icon-block2'>
          <FontAwesomeIcon className='icon2' icon={faMicrophone} />
        </div>
        <div
          className='icon-block2'onClick={() => {
            setoff(true)
          }}
        >
          <FontAwesomeIcon className='icon2' icon={faPhone} />
        </div>
        <div
          className='icon-block2'onClick={() => {
            if (streamObj === true) setStreamObj(false)
            else setStreamObj(true)
          }}
        >
          <FontAwesomeIcon className='icon2' icon={faVideo} />
        </div>
      </div>

      <div className='right-item'>
        <div className='icon-block3'>
          <FontAwesomeIcon className='icon3 red' icon={faClosedCaptioning} />
          <p className='title'>Turn on captions</p>
        </div>

        <div className='icon-block3'>
          <FontAwesomeIcon className='icon3 red' icon={faDesktop} />
          <p className='title'>Present now</p>
        </div>

      </div>
    </div>
  )
}

export default CallPageFooter
