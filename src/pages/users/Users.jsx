import { useSelector, useDispatch } from 'react-redux'
import { changeStr } from '../../redux/reducer/message.js'
export const Users = () => {
  const num = useSelector((data)=> data.counter.count)
  const str = useSelector((item)=> item.message.str)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Users {num}</h2>
      <p>{str}</p>
      <button onClick={()=>{dispatch(changeStr('users updated'))}}>Edit</button>
    </div>
  )
}
