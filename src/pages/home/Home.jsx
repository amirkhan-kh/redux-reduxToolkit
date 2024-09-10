import { useSelector, useDispatch } from 'react-redux';
import { useRef} from 'react'
import { add } from '../../redux/reducer/todo.js'
export const Home = () => {
  const {str} = useSelector((item)=> item.message)
  const {todo} = useSelector((s)=> s.todo)
  const inputRef = useRef()
  const dispatch = useDispatch();

  const handleValue = (e)  => {
    e.preventDefault();
    if(e.keyCode === 83){
      dispatch(add(e.target.value))
      inputRef.current.value
    }
  }
  return (
    <div className="mx-auto">
      <h2>Home {str}</h2>
      <input ref={inputRef}  onKeyUp={(e)=>handleValue(e)} type="text" placeholder="Enter data"  />
      <button>Add</button>
      <ul className="mt-4 bg-slate-200">
      {todo.length > 0 && todo.map((item, index) => (
         <li key={index}>{item}</li>
        ))}
 
      </ul>
    </div>
  )
}
