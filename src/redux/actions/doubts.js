import { GET_DOUBTS } from '../reducers/types'

export default function getDoubts(doubts) {
  return {
    type: GET_DOUBTS,
    payload: doubts
  }
}