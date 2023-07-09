import './call.scss'

const Calling = () => {
  const allMediaDevices = navigator.mediaDevices
  if (!allMediaDevices || !allMediaDevices.getUserMedia) {
    console.log('getUserMedia() not supported.')
    return
  }
  allMediaDevices.getUserMedia({
    audio: true,
    video: true
  })
    .then(function (vidStream) {
      const video = document.getElementById('videocam')
      if ('srcObject' in video) {
        video.srcObject = vidStream
      } else {
        video.src = window.URL.createObjectURL(vidStream)
      }
      video.onloadedmetadata = function (e) {
        video.play()
      }
    })
    .catch(function (e) {
      console.log(e.name + ': ' + e.message)
    })

  return (
    <video id='videocam' />
  )
}
export default Calling
