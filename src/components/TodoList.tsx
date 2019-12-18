import * as React from 'react';
import Todo from '../models/Todo';

interface Props {
  todos: Todo[],
  todosSagaData: any[]
  toggleTodo: (todoId: number) => void
  getPostStart: () => any,
}

interface State {
  todoList: any[]
}

export default class TodoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      todoList: []
    }
  }

  static getDerivedStateFromProps(nextProps : any) {
    return {
      todoList: [...nextProps.todos, ...nextProps.todosSagaData]
    }
  }

  componentDidMount() {
    this.props.getPostStart();
  }

  render() {
    const { todos, toggleTodo, todosSagaData } = this.props
    console.log('this.state.todoList', this.state.todoList)

    return (
      <ul>
        {
          this.state.todoList.map(todo => (
            <li
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              style={{ textDecoration: `${todo.done ? 'line-through' : ''}`, cursor: 'pointer' }}
            >
              {todo.name || todo.title}
            </li>)
          )
        }
      </ul>
    )
  }
}