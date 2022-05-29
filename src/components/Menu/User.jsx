import { useEffect } from 'react'
import { Dropdown, Image } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import { getClients, setLogin } from '../../redux/actions'
import { api } from '../../lib'

export function User() {
  const clients = useSelector(state => state.clients.clients)
  const login = useSelector(state => state.login.user)
  const dispatch = useDispatch()

  async function fetchClients() {
    const response = await api.get('/clients')

    dispatch(getClients(response.data))
  }

  useEffect(() => {
    fetchClients()
  }, [])

  return (
    <div className='h-[500px] flex flex-col py-16 items-center'>
      <Image
        className='w-40 h-40'
        roundedCircle
        src={login.image} 
        alt="profile image" 
      />
      <Dropdown>
        <Dropdown.Toggle className='bg-gray-400 border-0 mt-4'>
          {login.name}
        </Dropdown.Toggle>

        <Dropdown.Menu >
          {
            clients.map((cli, i) => (
              <Dropdown.Item
                key={i}
                onClick={() => dispatch(setLogin({
                  id: cli.id,
                  name: cli.username,
                  email: cli.email,
                  image: cli.image
                }))}
              >
                {cli.username}
              </Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
