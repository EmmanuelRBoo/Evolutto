import React, { useState } from 'react'
import { Fade } from 'react-bootstrap'
import { Feedbacks } from './components/Feedbacks'
import { Menu } from './components/Menu'
import { Router } from './router'

function App() {
  const [show, setShow] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [disp, setDisp] = useState('none')

  return (
    <div>
      <Menu 
        show={show}
        setShow={setShow}
        showProfile={showProfile} 
        setShowProfile={setShowProfile}
        setDisp={setDisp}
        disp={disp}
      />  
      <Router />
      <Fade 
        in={show}
        className='h-screen'
      >
        <div 
          onClick={() => {
            setShow(!show)
            setShowProfile(!showProfile)
            setDisp('none')
          }}
          style={{ display: disp }}
          className='fixed z-50 top-0 left-16 bg-zinc-800 bg-opacity-50 w-[calc(100%-4rem)] h-screen'
        />
      </Fade>
      <Feedbacks />
    </div>
  )
}

export default (App)
