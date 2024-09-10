import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../redux/reducer/counter.js'
import { changeStr } from '../../redux/reducer/message.js'
export const About = () => {
  const countApp = useSelector((data)=> data.counter.count);
  const str = useSelector((data)=> data.message.str)
  const dispatch = useDispatch()  
  return (
    <div>
      <h2></h2>
      <h2>About {str}</h2>
      <p>Current count: {countApp} </p>
      <button onClick={()=> {dispatch(increment())}}>increment</button>
      <button onClick={()=> {dispatch(decrement())}}>decrement</button>
      <button onClick={()=> {dispatch(changeStr("Updated!!!"))}}>changeStr</button>
    </div>
  )
}
