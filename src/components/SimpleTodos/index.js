import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
export default class SimpleTodos extends Component {
  state = {TodoList: initialTodosList}

  delItem = delID => {
    const {TodoList} = this.state
    const filList = TodoList.filter(list => list.id !== delID)

    this.setState({TodoList: filList})
  }

  render() {
    const {TodoList} = this.state
    return (
      <div className="container1">
        <div className="container2">
          <h1>Simple Todos</h1>
          <ul className="listcon">
            {TodoList.map(each => (
              <TodoItem
                key={each.id}
                id={each.id}
                title={each.title}
                deltodo={this.delItem}
              ></TodoItem>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
