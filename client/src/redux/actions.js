import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const counter = state => ({
	type: "INCREMENT",
	payload: { state }
})

export const login = state => {
	console.log('stateee', state)
	return ({
		type: "LOGIN",
		payload: {state}
	})
}

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
