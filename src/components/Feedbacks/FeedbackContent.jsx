import { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { MdDone, AiOutlineLoading3Quarters } from 'react-icons/all'

import { ScreenshotButton } from './Screenshot'
import { getAdmins } from '../../redux/actions'
import { api } from '../../lib'

export default function FeedbackContent({ setTitle, title, type }) {
  const [screenshot, takeScreenshot] = useState('')
  const [adminId, setAdmId] = useState(0)
  const [text, setText] = useState('')
  const [sending, isSending] = useState(false)
  const [sent, setSent] = useState(false)

  const login = useSelector(state => state.login.user)
  const admins = useSelector(state => state.admins.admins)
  const dispatch = useDispatch()

  async function fetchAdmins() {
    const response = await api.get('/admins')

    dispatch(getAdmins(response.data))
  }

  async function postFeedback() {
    isSending(true)

    const data = {
      userId: login.id,
      adminId,
      type,
      screenshot,
      feedback: text
    }

    await api.post('/feedbacks', data)
    
    isSending(false)
    setTitle('Obrigado pelo Feedback')
    setSent(true)
  }

  useEffect(() => {
    fetchAdmins()
  }, [])

  return (
    <>
      {
        sending
        ?
          <AiOutlineLoading3Quarters size={46} color='black' className='animate-spin my-14'/>
        :
          <>
            {
              sent
              ? 
                <div className='flex flex-col items-center my-10'>
                  <MdDone size={40} color='green'/>
                  <span>
                    Feedback enviado!
                  </span>
                  <Button 
                    onClick={() => setTitle('Deixe seu Feedback')}
                    className='flex-1 ml-3 mt-6 text-zinc-700 hover:bg-blue-600'>
                    Enviar outro Feedback
                  </Button>
                </div>
              :
              <Form className='flex flex-col'>
              {
                title === 'Reclamação'
                ?
                  <Form.Select className='my-2'>
                    {
                      admins.map(adm => (
                        <option 
                          key={adm.id} 
                          value={adm.id}
                          onClick={() => setAdmId(adm.id)}
                        >
                          {adm.name}
                        </option>
                      ))
                    }
                  </Form.Select>
                :
                  null
              }
              <Form.Label className='w-full'>
                <Form.Control
                  as='textarea'
                  className='h-28 w-72 resize-none text-sm'
                  placeholder='Relate o que aconteceu...'
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                />
              </Form.Label>
              <div className='flex mt-3'>
                <ScreenshotButton screenshot={screenshot} takeScreenshot={takeScreenshot} />
                <Button 
                  onClick={postFeedback}
                  disabled={text.length === 0 || text === ''}
                  className='flex-1 ml-3 text-zinc-700 hover:bg-blue-600 disabled:bg-zinc-600 disabled:bg-opacity-40 disabled:border-0'
                >
                  Enviar
                </Button>
              </div>
            </Form>
            }
          </>
      }
    </>
  )
}