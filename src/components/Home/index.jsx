import { useState } from 'react'
import { Image, ListGroup } from 'react-bootstrap'
import { Header } from '../Header' 
import { FaBook, FaBullhorn, FaComments,FaCalendarAlt } from 'react-icons/all'
import { HomeModal } from './Modal'

export function Home({ title }) {
  const [showModal, setShowModal] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState([])

  const articles = {
    "Contratos": {
      content: [],
      icon: <FaBook size={24} />
    },
    "Chamados": {
      content: [],
      icon: <FaBullhorn size={24} />
    },
    "Comentários": {
      content: [],
      icon: <FaComments size={24} />
    },
    "Agenda": {
      content: [],
      icon: <FaCalendarAlt size={24} />
    }
  }

  return (
    <div className='flex flex-col w-full items-center'>
      <Header title={title} />
      <div className='flex flex-col mt-20 w-4/5'>
        <section
          className='flex items-end w-full h-64 rounded-[4px] shadow-md'
          style={{ backgroundImage: 'linear-gradient(to bottom, #3d6580 60%, #ecf0f3 40%)'}}
        >
          <Image 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRucpvmQPFPFFQ2PomrKQh9zw7AV_OROfs6pg&usqp=CAU'
            className='w-32 h-32 m-8 shadow-md shadow-zinc-400 border-4 border-white'
          />
        </section>
        <section className='flex flex-row flex-wrap mt-8'>
          {
            Object.entries(articles).map(([key, value]) => (
              <div 
                key={key}
                className='w-1/2 p-4'
              >
                <div className='flex items-center justify-around text-[#0E71B3]'>
                  {value.icon}
                  <span className='text-start text-3xl font-medium flex-1 pl-4'>{key}</span>
                  <button
                    onClick={() => {
                      setModalTitle(key)
                      setModalContent(value.content)
                      setShowModal(!showModal)
                    }}
                    className='text-[#0E71B3] ring-1 border-b border-[#0E71B3] ring-[#0E71B3] p-[6px] px-4 text-xs font-light hover:bg-[#0E71B3] hover:text-white transition-all'
                  >
                    Ver todos...
                  </button>
                  <HomeModal
                    show={showModal}
                    onHide={() => setShowModal(!showModal)}
                    title={modalTitle}
                    content={modalContent}
                    close={setShowModal}
                  />
                </div>
                <ListGroup className='max-h-40 my-[10px] overflow-hidden'>
                  {
                    value.content.length === 0
                    ?
                      <div className='w-full text-center mt-4'>
                        {
                          key === "Agenda"
                          ? 
                            <span className='text-zinc-400 text-xs'>Sem eventos</span>
                          :
                            <span className='text-zinc-400 text-xs'>Sem {key.toLowerCase()}</span>
                        }
                      </div>
                    :
                      <>
                        {value.content.map((comment, i) => (
                          <ListGroup.Item className='max-h-10' key={i}>
                            {comment}
                          </ListGroup.Item>
                        ))}
                      </>
                  }
                </ListGroup>
              </div>
            ))
          }
        </section>
      </div>
    </div>
  )
}
