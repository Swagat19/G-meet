import { useState } from 'react'
import './Messenger.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimes,
  faUserFriends,
  faCommentAlt,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons'

const Messenger = ({ setIsMessenger }) => {
  const [msg, setMsg] = useState('')

  const handleChangeMsg = (e) => {
    setMsg(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setMsg('')
    }
  }

  const handleSendMsg = () => {
    setMsg('')
  }

  return (
    <div className='messenger-container'>
      <div className='messenger-header'>
        <h3>Meeting details</h3>
        <FontAwesomeIcon
          className='icon'
          icon={faTimes}
          onClick={() => {
            setIsMessenger(false)
          }}
        />
      </div>

      <div className='messenger-header-tabs'>
        <div className='tab'>
          <FontAwesomeIcon className='icon' icon={faUserFriends} />
          <p>People (1)</p>
        </div>
        <div className='tab active'>
          <FontAwesomeIcon className='icon' icon={faCommentAlt} />
          <p>Chat</p>
        </div>
      </div>

      <div className='chat-section' />

      <div className='send-msg-section'>
        <input
          placeholder='Send a message to everyone'
          value={msg}
          onChange={(e) => handleChangeMsg(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <FontAwesomeIcon
          className='icon'
          icon={faPaperPlane}
          onClick={handleSendMsg}
        />
      </div>
    </div>
  )
}

export default Messenger
