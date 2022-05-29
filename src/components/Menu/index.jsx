import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Nav, Overlay, OverlayTrigger, Popover, Image, Tooltip } from 'react-bootstrap'
import { GiHamburgerMenu, FaHome, BiSupport } from 'react-icons/all'
import { useSelector } from 'react-redux'

import { User } from './User'

export function Menu({ show, setShow, showProfile, setShowProfile, setDisp, disp }) {
  const [target, setTarget] = useState(null)

  const userImg = useSelector(state => state.login.user)

  const routes = {
    "Dashboard": {
      path: '/',
      icon: <FaHome size={20} color='white' />
    },
    "Dúvidas": {
      path: '/duvidas',
      icon: <BiSupport size={20} color='white' />
    },
  }

  function handleClick(event) {
    setShowProfile(!showProfile)
    setTarget(event.target)
  }

  return (
      <div className='absolute top-0 h-screen flex items-center'>
        <button
          className='z-50 fixed top-0 border-0 mt-[6px] ml-4'
          onClick={() => {
            setShow(!show)
            if(disp === 'none') setDisp('flex')
            else setDisp('none')
          }}
        >
          <GiHamburgerMenu  
            color='white'
            size={32}
          />
        </button>
          <div>
            <Collapse
              in={show}
              dimension='width'
              className='fixed top-0 left-0 min-h-screen min-w-screen'
            >
              <Nav 
                className='flex flex-col items-center pt-20 bg-[#175680]'
              >
                <Image 
                  src={userImg.image} 
                  alt='User photo'
                  roundedCircle
                  className='w-10 h-10 mb-4 cursor-pointer'
                  onClick={handleClick}
                />
                <Overlay
                  show={showProfile}
                  placement='right'
                  target={target}
                  containerPadding={20}
                >
                  <Popover className='w-full max-w-[340px] max-h-[400px]'>
                      <User />
                  </Popover>
                </Overlay>
                {
                  Object.entries(routes).map(([key, value]) => (
                    <OverlayTrigger
                      placement='right'
                      key={key}
                      overlay={
                        <Tooltip>
                          <span className='p-2'>{key}</span>
                        </Tooltip>
                      }
                    >
                      <Nav.Item>
                        <Link 
                          onClick={() => {
                            setShowProfile(false)
                            setShow(false)  
                            setDisp('none')
                          }}
                          className='p-[0.9rem] mx-2 my-1 flex rounded-sm hover:bg-gray-300 hover:bg-opacity-20 hover:transition-all'
                          to={value.path}
                        >
                          {value.icon}
                        </Link>
                      </Nav.Item>
                    </OverlayTrigger>
                  ))
                }
              </Nav>
            </Collapse>
          </div>
      </div>  
  )
}