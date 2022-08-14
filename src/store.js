import React from "react";

const initialState = {
	todos: [
		{
			id: 1,
			text: "Learn React",
			completed: false,
		},
		{
			id: 2,
			text: "Build a todo app",
			completed: false,
		},
	],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return {
				...state,
				todos: [...state.todos, action.todo],
			};
		case "REMOVE_TODO":
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.id),
			};
		case "TOGGLE_TODO":
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.id) {
						return {
							...todo,
							completed: !todo.completed,
						};
					} else {
						return todo;
					}
				}),
			};
		default:
			return state;
	}
};

const store = React.createContext(initialState);

export default StoreProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<store.Provider value={{ state, dispatch }}>{children}</store.Provider>
	);
};

export const useSelector = () => React.useContext(store);
