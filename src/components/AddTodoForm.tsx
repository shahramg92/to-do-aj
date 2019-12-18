import * as React from 'react';
import { FormEvent } from 'react';

interface Props {
  handleSubmit: (value: string) => void
  getPosts: (value: string) => any
}

interface State {
  value: string
}

export default class AddTodoForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { value: '' } // Value is empty by default
    this.updateValue = this.updateValue.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateValue(value: string) {
    this.setState({ value })
  }

  handleSubmit(e: FormEvent<any>) {
    e.preventDefault()
    if (!this.state.value.trim()) {
      return
    }
    this.props.handleSubmit(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    const { value } = this.state
    const { updateValue, handleSubmit } = this

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1 style={{color: 'black'}}>To-Do-Redux-Sagas-TypeScript-Immer-Api</h1>
          <input type="text" value={value} onChange={e => updateValue(e.target.value)} />
          <button type="submit">Add todo !</button>
        </form>
      </div>
    )
  }
}