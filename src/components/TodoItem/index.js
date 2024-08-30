// Write your code here
import './index.css'

const TodoItem = props => {
  const {id, title, deltodo} = props
  const Del = () => {
    deltodo(id)
  }

  return (
    <li className="l">
      <p className="p">{title}</p>
      <button className="b" type="button" onClick={Del}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
