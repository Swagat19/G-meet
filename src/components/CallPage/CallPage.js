import './CallPage.scss'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Messenger from './../UI/Messenger/Messenger'
import MeetingInfo from '../UI/MeetingInfo/MeetingInfo'
import CallPageFooter from '../UI/CallPageFooter/CallPageFooter'
import CallPageHeader from '../UI/CallPageHeader/CallPageHeader'
import Calling from './call'

const CallPage = () => {
  const navigate = useNavigate()

  const isAdmin = window.location.hash === '#init'
  const url = `${window.location.origin}${window.location.pathname}`

  const [streamObj, setStreamObj] = useState(false)
  const [meetInfoPopup, setMeetInfoPopup] = useState(false)
  const [isMessenger, setIsMessenger] = useState(false)
  const [off, setoff] = useState(false)

  useEffect(() => {
    if (isAdmin) {
      setMeetInfoPopup(true)
    }
    if (off) {
      navigate('/')
    }
  }, [off, isAdmin, navigate])

  return (
    <div className='callpage-container'>
      <video className='video-container' controls />

      <CallPageHeader setIsMessenger={setIsMessenger} />
      <CallPageFooter setMeetInfoPopup={setMeetInfoPopup} setStreamObj={setStreamObj} streamObj={streamObj} setoff={setoff} />
      {streamObj && (<Calling />)}
      {isAdmin && meetInfoPopup && (
        <MeetingInfo setMeetInfoPopup={setMeetInfoPopup} url={url} />
      )}

      {isMessenger && (<Messenger setIsMessenger={setIsMessenger} />)}
    </div>
  )
}

export default CallPage
