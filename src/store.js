import React from "react";

const initialState = {
	todos: [
		{
			id: 1,
			text: "Learn React",
			completed: false,
			createdAt: 1660473745467,
		},
		{
			id: 2,
			text: "Build a todo app",
			completed: false,
			createdAt: 1660473687766,
		},
	],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return {
				...state,
				todos: [action.payload, ...state.todos],
			};
		case "REMOVE_TODO":
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		case "TOGGLE_TODO":
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.payload) {
						return {
							...todo,
							completed: !todo.completed,
						};
					} else {
						return todo;
					}
				}),
			};
		case "SORT_TODOS":
			return {
				...state,
				todos: state.todos.sort((a, b) => {
					return a.completed - b.completed;
				}),
			};
		default:
			return state;
	}
};

const store = React.createContext(initialState);

export default function StoreProvider({ children }) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<store.Provider value={{ state, dispatch }}>{children}</store.Provider>
	);
}

export const useStore = () => React.useContext(store);
