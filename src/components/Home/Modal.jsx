import { ListGroup, Modal } from 'react-bootstrap'
import { GrClose } from 'react-icons/all'

export function HomeModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby="contained-modal-title-vcenter"
      className='overflow-scroll max-h-[96%]'
      centered
    >
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
        <GrClose 
          size={22} 
          color='gray' 
          onClick={() => props.close(false)}
          className='cursor-pointer'
        />
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {
            props.content.lenght === 0
            ?
              <>
                {
                  key === "Agenda"
                  ? 
                    <ListGroup.Item className='text-zinc-400 text-xs'>Sem eventos</ListGroup.Item>
                  :
                    <ListGroup.Item className='text-zinc-400 text-xs'>Sem {key.toLowerCase()}</ListGroup.Item>
                }
              </>
            :
              <>
                {
                  props.content.map((content, i) => (
                    <ListGroup.Item className='max-h-10' key={i}>
                      {content}
                    </ListGroup.Item>
                  ))
                }
              </>
          }
        </ListGroup>
      </Modal.Body>
    </Modal>
  )
}