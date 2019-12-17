
import { connect } from 'react-redux'
// import { State } from '../reducers'
import { getTodos } from '../store/selectors/todos';
import { toggleTodo } from '../store/actions/todos';
import { getAllPosts } from '../store/actions/todos';
import * as actions from '../store/actions/actionCreators';
import TodosList from '../components/TodoList';

const mapStateToProps = (state: any) => ({
  todos: getTodos(state)
})

const mapDispatchToProps = {
  onTodoClicked: toggleTodo,
  getAllPosts: actions.getPostStart,
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TodosList)