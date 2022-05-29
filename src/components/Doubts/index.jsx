import { useEffect } from 'react'
import { Accordion } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import { Header } from '../Header'
import { getDoubts } from '../../redux/actions'
import { api } from '../../lib'

export function Doubts({title}) {
  const doubts = useSelector(state => state.doubts.doubts)
  const dispatch = useDispatch()

  async function fetchDoubts() {
    const response = await api.get('/doubts')
    dispatch(getDoubts(response.data))
  }

  useEffect(() => {
    fetchDoubts()
    console.log(doubts)
  }, [])

  return (
    <div className='flex flex-col h-screen w-full items-center' >
      <Header title={title} />
      <div className='flex flex-col h-full justify-center py-10 mt-10 w-3/5'>
        <Accordion 
          className='flex flex-col'
        >
          {
            doubts.map((doubt, i) => (
              <Accordion.Item 
                eventKey={i}
                key={i}
                className='my-2 ring-1 ring-[#0E71B3]'
              >
                <Accordion.Header>
                  {doubt.title}
                </Accordion.Header>
                <Accordion.Body>
                  {doubt.content}
                </Accordion.Body>    
              </Accordion.Item>        
            ))
          }
        </Accordion>
      </div>
    </div>
  )
}