import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserFriends,
  faCommentAlt,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons'
import './CallPageHeader.scss'

const CallPageHeader = ({
  setIsMessenger
}) => {
  return (
    <div className='frame-header'>
      <div className='header-items icon-block'>
        <FontAwesomeIcon className='icon' icon={faUserFriends} />
      </div>
      <div
        className='header-items icon-block' onClick={() => {
          setIsMessenger(true)
        }}
      >
        <FontAwesomeIcon className='icon' icon={faCommentAlt} />
        <span className='alert-circle-icon' />
      </div>
      <div className='header-items date-block'>1:00 PM</div>
      <div className='header-items icon-block'>
        <FontAwesomeIcon className='icon profile' icon={faUserCircle} />
      </div>
    </div>
  )
}

export default CallPageHeader
