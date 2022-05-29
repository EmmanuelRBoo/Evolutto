import { useState } from 'react'
import { Image, Toast, Card } from 'react-bootstrap'
import { BsX, BsArrowLeft } from 'react-icons/all'

import Bug from '../../assets/bug.png'
import Idea from '../../assets/idea.png'
import Reclamation from '../../assets/reclamation.png'
import Logo from '../../assets/logo.png'
import FeedbackContent from './FeedbackContent'

export function Feedbacks() {
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState('Deixe seu Feedback')
  const [type, setType] = useState(null)
  const [icon, setIcon] = useState(null)

  const feedbackTypes = {
    BUG: {
      title: 'Problema',
      image: {
        source: Bug,
        alt: 'Imagem de um inseto'
      }
    },
    IDEA: {
      title: 'Ideia',
      image: {
        source: Idea,
        alt: 'Imagem de uma lâmpada'
      }
    },
    RECLAMATION: {
      title: 'Reclamação',
      image: {
        source: Reclamation,
        alt: 'Imagem de um triângulo com uma exclamação'
      }
    }
  }

  return (
    <>
      <Toast 
        className='fixed bottom-20 right-2ottom-20 right-2 bg-white shadow-md shadow-zinc-500 border-1 border-zinc-600' 
        show={show} 
        onClose={() => setShow(!show)}
      >
        <Toast.Header 
          closeButton={false}
          className='flex justify-between items-center bg-blue-200 bg-opacity-30'>
          {
            title === 'Deixe seu Feedback'
            ? 
              <>
                <span className='text-center flex-1'>{title}</span>
                <BsX 
                  size={22} 
                  className='cursor-pointer'
                  onClick={() => setShow(!show)}
                />
              </>
            :
            <>
              <BsArrowLeft 
                size={20} 
                className='cursor-pointer'
                onClick={() => {
                  setTitle('Deixe seu Feedback')
                  setIcon(undefined)
                }}
              />
              <div className='flex items-center'>
                <Image 
                  src={icon}
                  className='w-6 h-6 mr-2'
                />
                <span className='text-center'>{title}</span>
              </div>
              <BsX 
                size={22} 
                className='cursor-pointer'
                onClick={() => setShow(!show)}
              />
            </>
          }
          
          
         
        </Toast.Header>
        <Toast.Body 
          className='flex justify-center bg-blue-200 bg-opacity-30'
        >
          {
            title === 'Deixe seu Feedback'
            ?
              <>
                {
                  Object.entries(feedbackTypes).map(([key, value]) => (
                    <Card 
                      key={key}
                      onClick={() => {
                        setTitle(value.title)
                        setIcon(value.image.source)
                        setType(key)
                      }}
                      className='flex items-center justify-end w-24 h-28 p-2 m-2 cursor-pointer bg-blue-200 bg-opacity-0 border-1 border-blue-300 hover:bg-blue-300 hover:ring-2 hover:ring-blue-300 hover:ring-offset-1 hover:ring-offset-white transition-all'
                    >
                      <Card.Img 
                        src={value.image.source} 
                        alt={value.image.alt}
                        className='w-10 h-10 mb-3'
                      />
                      <Card.Text>
                        {value.title}
                      </Card.Text>
                    </Card>            
                  ))
                }
              </>
            :
              <FeedbackContent setTitle={setTitle} title={title} type={type} />
          }
        </Toast.Body>
      </Toast>
      <div 
        className='fixed bottom-3 cursor-pointer right-3 ring-2 ring-white rounded-full p-[2px] border-2 border-[#0E71B3] hover:p-2 transition-all'
        onClick={() => setShow(!show)}
      >
        <Image 
          src={Logo}
          width={44}
          height={44}
          roundedCircle
        />
      </div>
    </>
  )
}