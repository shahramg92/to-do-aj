import Todo from '../../models/Todo';
import GetPosts from '../../models/GetPosts';

/*
 * In order to automatically generate id for our todos
 */  
let nextId = 11

/*
 * We're defining every action name constant here
 * We're using Typescript's enum
 * Typescript understands enum better 
 */
export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  GET_ALL_POST = 'GET_ALL_POST',
}

/*
 * Define return types of our actions 
 * Every action returns a type and a payload
 */
export interface AddTodoAction { type: ActionTypes.ADD_TODO, payload: { todo: Todo } }
export interface ToggleTodoAction { type: ActionTypes.TOGGLE_TODO, payload: { todoId: number } }
export interface GetAllPosts {type: ActionTypes.GET_ALL_POST, payload: {posts: GetPosts}}

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function addTodo(name: string): AddTodoAction {

  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: {
        id: nextId++,
        name: name,
        done: false
      }
    }
  }
}

export function toggleTodo(todoId: number): ToggleTodoAction {
  return { type: ActionTypes.TOGGLE_TODO, payload: { todoId } } // {todoId} is a shortcut for {todoId: todoId}
}

/*
 * Define the Action type
 * It can be one of the types defining in our action/todos file
 * It will be useful to tell typescript about our types in our reducer
 */
export type Action = AddTodoAction | ToggleTodoAction;