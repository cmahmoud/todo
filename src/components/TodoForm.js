import React from "react";
import { useStore } from "../store";
import { FaPlus } from "react-icons/fa";

export default function TodoForm() {
	const { dispatch } = useStore();
	const addNewTodo = (e) => {
		e.preventDefault();
		dispatch({
			type: "ADD_TODO",
			payload: {
				id: Date.now(),
				text: e.target.text.value,
				completed: false,
				createdAt: Date.now(),
			},
		});
		e.target.reset();
	};

	return (
		<form className="w-full mb-4" onSubmit={addNewTodo}>
			<div className="relative">
				<input
					type="text"
					name="text"
					placeholder="What needs to be done?"
					className="w-full p-2 text-[#5b7a9d] border-2 border-violet-400 rounded-lg focus:outline-none focus:ring-0"
					required
				/>
				<button
					type="submit"
					className="absolute right-2.5 bottom-1.5 p-2 text-white rounded-full transition-colors duration-200 transform bg-violet-400 hover:bg-violet-500 hover:scale-105 focus:outline-none"
				>
					<FaPlus />
				</button>
			</div>
		</form>
	);
}
