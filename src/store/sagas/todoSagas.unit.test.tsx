import React from 'react';
import { shallow } from 'enzyme';
import toDoList from '../../components/TodoList';

describe('toDoList', () => {
    it('makes api call in componentDidMount by dispatching action', () => {
        const link = shallow(<toDoList></toDoList>)
    })
})