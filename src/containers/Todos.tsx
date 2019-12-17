
import { connect } from 'react-redux'
// import { State } from '../reducers'
import { getTodos } from '../store/selectors/todos';
import { toggleTodo } from '../store/actions/todos';
import { getAllPosts } from '../store/actions/todos';
import TodosList from '../components/TodoList';

const mapStateToProps = (state: any) => ({
  todos: getTodos(state)
})

const mapDispatchToProps = {
  onTodoClicked: toggleTodo,
  getAllPosts: getAllPosts,
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TodosList)