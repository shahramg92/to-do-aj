
import { connect } from 'react-redux';
import { bindActionCreators } from'redux';
// import { State } from '../reducers'
import { getTodos } from '../store/selectors/todos';
import { toggleTodo } from '../store/actions/todos';
import { getPostStart } from '../store/actions/actionCreators';
import TodosList from '../components/TodoList';

const mapStateToProps = (state: any) => ({
  todos: getTodos(state),
  todosSagaData: state.toDoSagasData.toDoCustom
})

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators(
    {
      getPostStart,
      toggleTodo
    },
    dispatch
  )
)

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TodosList)